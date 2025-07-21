import IdExample from "../components/IdExample";
import LayoutEffectExample from "../components/LayoutEffectExample";
import ParentComponent from "../components/ParentComponent";
import TransitionExample from "../components/TransitionExample";

export default function HookTest() {
    return (<div>
        <h2>useLayoutEffect Test 테스트</h2>
        <LayoutEffectExample />
        <IdExample />
        <TransitionExample />
        <ParentComponent />
        </div>)
}
