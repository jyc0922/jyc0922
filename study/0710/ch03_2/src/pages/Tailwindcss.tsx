import * as D from '../data';

export default function Tailwindcss() {
    return (
    <div className='bg-black/30'>
        <p className="w-full p-10 text-7xl text-yellow-300">Tailwindcss</p>
        <p className="italic text-gray-50 line-clamp-3">{D.randomParagraphs(5)}</p>
        <button className='btn btn-primary' style={{textTransform:'none'}}>Button</button>
    </div>
    )
}