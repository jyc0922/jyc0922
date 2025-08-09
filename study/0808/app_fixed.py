from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import pickle
import random
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
        print("ℹ️ svd_model_E.pkl 파일이 없습니다. 더미 데이터로 동작합니다.")
except Exception as e:
    print(f"❌ AI 모델 로딩 실패: {e}")

# --- 가상 데이터 (수도권 지역 예시) ---
capital_area_db = {
    '101': {'name': '경복궁', 'img': 'https://example.com/img1.jpg', 'persona': 'family'},
    '102': {'name': 'N서울타워', 'img': 'https://example.com/img2.jpg', 'persona': 'couple'},
    '103': {'name': '북한산 국립공원', 'img': 'https://example.com/img3.jpg', 'persona': 'solo'},
    '104': {'name': '롯데월드타워', 'img': 'https://example.com/img4.jpg', 'persona': 'family'},
    '105': {'name': '익선동 한옥거리', 'img': 'https://example.com/img5.jpg', 'persona': 'couple'},
    '106': {'name': '수원 화성', 'img': 'https://example.com/img6.jpg', 'persona': 'family'},
    '107': {'name': '인천 차이나타운', 'img': 'https://example.com/img7.jpg', 'persona': 'couple'},
}

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/recommend")
def recommend():
    persona_filter = request.args.get('persona', 'all')

    # 실제 모델 사용 가능하면 여기에 추천 로직 추가
    # 지금은 capital_area_db에서 무작위로 섞어서 반환
    recommended_ids = list(capital_area_db.keys())
    random.shuffle(recommended_ids)

    results = []
    for place_id in recommended_ids:
        place_info = capital_area_db.get(place_id)
        if place_info:
            data = {'id': place_id, **place_info}
            results.append(data)

    if persona_filter != 'all':
        results = [p for p in results if p['persona'] == persona_filter]

    return jsonify(results)

if __name__ == '__main__':
    app.run(port=5000, debug=True)
