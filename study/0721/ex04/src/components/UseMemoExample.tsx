import React, {useMemo, useState} from "react";

function slowFunction(num: number) {
    console.log("Slow function called 무거운 계산 실행 중..");
    let result = 0;
    for (let i = 0; i < 1e8; i++) {
        result += num * Math.random();
    }
    return result;
}

export default function UseMemoExample() {
    const [count, setCount] = useState(0);
    const [other, setOther] = useState(false);

    const expensiveResult = useMemo(() => {
        return slowFunction(count);
    }, [count]);

    return (
        <div style={{padding: 20}}>
            <h2>useMemo Example 예제</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+1 증가</button>
            <button onClick={() => setCount(count)}>+0 증가</button>
            <button onClick={() => setOther(!other)}>Toggle: {other.toString()}</button>
            <p>Expensive Result: {expensiveResult.toFixed(2)}</p>
        </div>
    );
}