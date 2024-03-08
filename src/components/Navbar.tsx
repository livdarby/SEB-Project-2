import React from "react"
import { Link } from "react-router-dom"

function Navbar() {
return (
    <>
    <header>
        <nav className="navbar is-link">
            <div className="container">
                <div className="navbar-brand ml-5">
                    <Link className="navbar-item" to="/">Home</Link>
                    <Link className="navbar-item" to="/quiz">Quiz</Link>
                </div>
            </div>
        </nav>
    </header>
    </>
)
}

export default Navbar