import React, {useLayoutEffect, useRef, useEffect} from "react";

export default function LayoutEffectExample() {
    const boxRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (boxRef.current) {
            boxRef.current.style.background = "skyblue"
            boxRef.current.style.width = "300px"
        }
    }, []);

    return (<div ref={boxRef}>useLayoutEffect 로 스타일 적용</div>);
}