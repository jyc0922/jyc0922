export default function Bootstrap() {
    return <form>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
            </label>
            <input type="email" className="form-control" id="exampleInputEmail1" />
            <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
            </div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
                Password
            </label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
            <div id="passwordHelp" className="form-text">
                We'll never share your password with anyone else.
            </div>
        </div>
        <div className="mb-3 form-check" >
            <label htmlFor="exampleInputPassword1" className="form-label">
                Check Password
            </label>
            <input type="checkbox" className="form-check-input" id="exampleInputCheck1" />
            <div id="exampleCheck" className="form-check-label">
                Check me out.
            </div>
        </div>
        <button type="submit" className="btn btn-secondary">
            Submit</button>         
    </form>
}