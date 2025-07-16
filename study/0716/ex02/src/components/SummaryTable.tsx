type Complete = {
    user: string;
    car: string;
    date: string;
}

export default function SummaryTable({user, car, date}: Complete) {
    return (
        <div className="p-4 bg-white border rounded shadow">
            <h2>{user}</h2>
            <h3>{car}</h3>
            <h3>{date}</h3>
        </div>
    )
}