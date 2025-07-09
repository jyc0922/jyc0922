import { SyntheticEvent } from "react";

export default function EventBubbling() {
    const onDivClick = (e: SyntheticEvent) => {
        const {isTrusted, target, bubbles, currentTarget } = e;
        console.log("click event bubbles on <div>", isTrusted, target, bubbles, currentTarget);
    }
    return <div>CopyMe</div>;
}

