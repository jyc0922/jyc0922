from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import pickle
import os

app = Flask(__name__, template_folder="templates", static_folder="static")
CORS(app)

# --- AI 모델 로딩 ---
ai_model = None
try:
    if os.path.exists('svd_model_E.pkl'):
        with open('svd_model_E.pkl', 'rb') as f:
            ai_model = pickle.load(f)
        print("✅ AI 모델(svd_model_E.pkl) 로딩 성공!")
    else:
        print("ℹ️ svd_model_E.pkl 파일이 없습니다. 더미/고정 목록으로 동작합니다.")
except Exception as e:
    print(f"❌ AI 모델 로딩 실패: {e}")

# --- 가상 데이터 (수도권 지역 예시) ---
# NOTE: 실제 서비스에서는 DB/카탈로그에서 읽어오세요.
capital_area_db = {
    '101': {'name': '경복궁', 'img': 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=1470&auto=format&fit=crop', 'persona': 'family'},
    '102': {'name': 'N서울타워', 'img': 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=1470&auto=format&fit=crop', 'persona': 'couple'},
    '103': {'name': '북한산 국립공원', 'img': 'https://images.unsplash.com/photo-1562232572-2ed6a1e7818b?q=80&w=1470&auto=format&fit=crop', 'persona': 'solo'},
    '104': {'name': '롯데월드타워', 'img': 'https://images.unsplash.com/photo-1517772253057-9d7a2f67b55c?q=80&w=1470&auto=format&fit=crop', 'persona': 'family'},
    '105': {'name': '익선동 한옥거리', 'img': 'https://images.unsplash.com/photo-1623378099972-963aeac44871?q=80&w=1470&auto=format&fit=crop', 'persona': 'couple'},
    '106': {'name': '수원 화성', 'img': 'https://images.unsplash.com/photo-1599292996413-48d1fd589af3?q=80&w=1470&auto=format&fit=crop', 'persona': 'family'},
    '107': {'name': '인천 차이나타운', 'img': 'https://images.unsplash.com/photo-1566198263737-0deef345224c?q=80&w=1470&auto=format&fit=crop', 'persona': 'couple'},
}

def _score_with_model(user_id: str, item_ids):
    """
    Surprise 모델로 user_id에 대한 각 item_id의 예측 점수(est)를 계산.
    모델에 없는 raw id가 들어오면 PredictionImpossible이 날 수 있으므로 예외 처리.
    """
    scored = []
    if ai_model is None:
        return scored
    for iid in item_ids:
        try:
            pred = ai_model.predict(user_id, iid)
            # pred.est 가 float 점수
            scored.append((iid, float(getattr(pred, "est", 0.0))))
        except Exception:
            # 해당 (user,item)이 모델에 없거나 cold-start면 스킵
            continue
    return scored

@app.route("/")
def home():
    return render_template("index.html")

@app.get("/recommend")
def recommend():
    persona_filter = request.args.get("persona", "all")
    user_id = request.args.get("user_id", "guest")  # 프론트에서 주면 사용, 없으면 guest
    topn = int(request.args.get("topn", "12"))

    # 1) 후보 아이템 수집 (+ 페르소나 필터)
    candidates = [iid for iid, meta in capital_area_db.items()
                  if persona_filter == "all" or meta.get("persona") == persona_filter]

    # 2) 모델로 스코어링 (가능하면)
    scored = _score_with_model(user_id, candidates)

    results = []
    if scored:
        # 점수 기준 내림차순 정렬
        scored.sort(key=lambda x: x[1], reverse=True)
        ranked_ids = [iid for iid, _ in scored][:topn]
        results = [
            {"id": iid, "score": next(s for i, s in scored if i == iid), **capital_area_db[iid]}
            for iid in ranked_ids if iid in capital_area_db
        ]
    else:
        # 3) 모델 스코어링이 불가능하면 "안 바뀌는" 고정 순서로 반환 (id 오름차순)
        ranked_ids = sorted(candidates)[:topn]
        results = [{"id": iid, "score": None, **capital_area_db[iid]} for iid in ranked_ids]

    return jsonify(results)

if __name__ == "__main__":
    app.run(port=5000, debug=True)
