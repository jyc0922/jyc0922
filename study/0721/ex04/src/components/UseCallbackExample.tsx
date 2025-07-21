import React, {useCallback, useState} from "react";

const Child = React.memo(({onClick}: {onClick: () => void}) => {
    console.log("Rendering Child 자식 컴포넌트 렌더링")
    return (
    <div>
        <button onClick={onClick}>Click Me 자식 버튼 클릭</button>
    </div>
    );
});

export default function useCallbackExample() {
    // count 선언
    const [count, setCount] = useState(0);

    // other 선언
    const [other, setOther] = useState(false);

    const handleClick = useCallback(() => {
        setCount((prev) => prev + 1);
    }, []
);



    return (<div style={{padding: 20}}>
        <h2>useCallback Example 예제</h2>
        <p>Count: {count}</p>
        <button onClick={() => setOther(!other)}>
            Toggle: {other.toString()}
        </button>
        <Child onClick={handleClick} />     
    </div>
    );
}