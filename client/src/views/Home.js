import { useNavigate } from "react-router"

export function Home() {

    const navigate = useNavigate()

    return(
        <div className="text-center container">
            <div className="d-flex flex-column justify-content-center">
                <nav>
                    <h1 className="text-center">BKF - Messaging App</h1>
                </nav>
            </div>

            <div className="d-flex flex-column justify-content-center">
                <div id="navigationButtons" className=" mb-3">
                    <button className="btn btn-default" onClick={() => navigate('/register')}>Register</button>
                </div>
            </div>
            <div className="d-flex flex-column">
                <div className="">
                    <button className="btn btn-default" onClick={() => navigate('/Login')}>Login</button>
                </div>
            </div>
        </div>
    )
}