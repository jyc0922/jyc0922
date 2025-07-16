import { useState } from "react";
import ApplyScrapPage from "./pages/ApplyScrapPage";
import GreetingPage from "./pages/GreetingPage";
import QuotationPage from "./pages/QuotationPage";
import ScrapCompletePage from "./pages/ScrapCompletePage";

function App() {
  const [stage, setStage] = useState(1);
  // const [count, setCount] = useState(10);
  const [num, setNum] = useState(10);
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);

  const prevStage = () => {
    setStage(stage - 1);
  }
  const nextStage = () => {
    setStage(stage + 1);
  }
  const countUp = () => {
    setCount(count + 1);
  }
  
  

  return (
    <div>

      <button className={active ? 'btn btn-success' : 'btn btn-outline'}
        onClick={() => setActive(!active)}>
        {active ? '활성화됨' : '비활성화됨'}
      </button>

      <button className="items-center p-4 m-4 bg-red-300 border-l shadow-md w-1/8"
      onClick={() => setCount(count + 1)}>카운트+1</button>
      <span className="m-2 text-2xl font-bold bg-slate-400">{count}</span>      
      <button className="items-center p-4 m-4 bg-red-600 border-l shadow-md w-1/9"
      onClick={() => setCount(0)}>초기화</button>
      <button className="w-1/5 p-4 m-4 bg-pink-200"
      onClick={countUp}>카운트 {count} 증가</button>

      <button className="items-center w-1/4 p-4 m-4 bg-yellow-200 border-l shadow-md"
      onClick={() => setNum(Math.floor(Math.random() * 10))}>랜덤 생성 숫자
      <p>숫자: {num}</p>
      </button>    

      <button className="p-4 m-4 bg-blue-300"
      onClick={prevStage}>이전</button>
      <span>{stage}</span>
      <button className="p-4 m-4 bg-blue-300"
      onClick={nextStage}>다음</button>
      {stage % 4 === 1 && <GreetingPage />}
      {stage % 4 === 2 && <ApplyScrapPage />}
      {stage % 4 === 3 && <QuotationPage />}
      {stage % 4 === 0 && <ScrapCompletePage />}

      

      {/* <GreetingPage />
      <ApplyScrapPage />
      <QuotationPage /> */}
      {/* <ScrapCompletePage /> */}
      
    </div>
  )

}

export default App;
