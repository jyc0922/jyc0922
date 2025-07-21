import ExpensiveComponent from "../components/ExpensiveComponent";
import Parent from "../components/Parent";
import UseMemoExample from "../components/UseMemoExample";
import UseCallbackExample from "../components/UseCallbackExample";

export default function MemoTest() {
    return (
        <div>
            <h2>useMemo Test</h2>
            <ExpensiveComponent />
            <UseMemoExample />
            <Parent />
            <UseCallbackExample />
        </div>
    )
}