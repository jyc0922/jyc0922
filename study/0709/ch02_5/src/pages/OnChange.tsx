import type { ChangeEvent } from "react"

export default function Onchange() {
    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation()
        e.preventDefault()
        console.log('onChangeValue', e.target.value)
    }
    const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation()
        console.log('onChangeChecked', e.target.checked)
    }
    const onChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation()
        console.log('onChangeFiles', e.target.files)
    }
    return (
        <div>
            <p>OnChange</p>
            <input type="text" onChange={onChangeValue} 
              placeholder="type some texts" defaultValue="Hello" />
            <input type="checkbox" onChange={onChangeChecked} defaultChecked/>
            <input type="file" onChange={onChangeFiles} multiple accept="image/*"/>
        </div>
    )
}