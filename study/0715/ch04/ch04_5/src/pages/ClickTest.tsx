import {useRef, useCallback} from 'react'
import { Title, Subtitle } from '../components' 
import { Button } from '../theme/daisyui'

export default function ClickTest() {
    const inputRef = useRef<HTMLInputElement>(null)
    const onClick = useCallback(() => inputRef.current?.click(), [])

    return (
    <section className="mt-4">
        <Title>ClickTest</Title>
        <div className='flex items-center justify-center mt-4'>
            <Button className='mr-4 btn-primary' onClick={onClick}>
                CLICK ME File
            </Button>
            <input type="file" ref={inputRef} className='hidden' accept='image/*' />
        </div>
    </section>
    )
}