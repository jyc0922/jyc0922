export default function VariousInputs() {
    return (
        <div>
            <p>VariousInputs</p>
            <div>
                <input type="text" placeholder="enter some texts" />
                <input type="password" placeholder="enter some password" />
                <input type="email" placeholder="enter email address" />
                <input type="range" />
                <input type="button" value="I am a button" />
                <input type="checkbox" value="I am a checkbox" defaultChecked />
                <input type="radio" value="I am a radio" defaultChecked />
                <input type="file" />
            </div>
        </div>
    )
}