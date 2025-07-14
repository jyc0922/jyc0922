import { Div, Title, Subtitle } from "../components"
import * as D from '../data'


export default function DirectionTest() {
    const boxes = D.range(1, 9 + 1).map(number => {
        return (
            <p key={number} className={`border-2 border-pink-300 p-1 mt-10 ml-5`}>{number}</p>
        )
    })

    return (
    <section className="mt-20">
        <Title>DirectionTest</Title>
        <Div className="flex flex-row mt-4">
            <Div className="mr-20">
                <Subtitle>flex-row</Subtitle>
                <Div className="flex flex-row p-4">{boxes}</Div>
            </Div>
            <Div className="mr-20">
                <Subtitle>flex-row-reverse</Subtitle>
                <Div className="flex flex-row-reverse p-4">{boxes}</Div>
            </Div>
            <Div className="mr-20">
                <Subtitle>flex-col</Subtitle>
                <Div className="flex flex-col p-4">{boxes}</Div>
            </Div>
            <Div className="mr-10">
                <Subtitle>flex-col-reverse</Subtitle>
                <Div className="flex flex-col-reverse p-4">{boxes}</Div>
            </Div>
        </Div>
    </section>
    )
}