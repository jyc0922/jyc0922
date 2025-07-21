import React,{useId, useState} from "react";

export default function IdExample() {
    const [name, setName] = useState("");
    const id = useId();
    const id2 = useId();
    console.log(id, id2);
    
    return (
    <div>
        <label htmlFor={id}>
            id:{id}, 이름:{name}
        </label>
        <input 
            type="text" 
            id={id}
            value={name} 
            onChange={(e) => setName(e.target.value)}
        />
    </div>
    )
}