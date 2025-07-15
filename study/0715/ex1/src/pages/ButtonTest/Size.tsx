import {Button} from '../../theme/daisyui'

export default function Size() {
    return (
        <section className="mt-4">
            <h2 className="text-3xl font-bold text-center">Size</h2>
            <div className="flex mt-4 justify-evenly">
                <Button className='btn-lg btn-primary'>BTN-LG</Button>
                <Button className='btn-md btn-secondary'>BTN-MD</Button>
                <Button className='btn-sm btn-success'>BTN-SM</Button>
                <Button className='btn-xs btn-error'>BTN-XS</Button>
            </div>
        </section>
    )
}