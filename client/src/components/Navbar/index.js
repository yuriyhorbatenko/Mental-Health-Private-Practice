import React from "react";
import "./Navbar.css";

function Navbar() {
    return (

        <nav className="navbar">
            <div className="name">
                <a className="name-link" href="/" id="home-link">Ilona Menshova<span className="sr-only">(current)</span></a>
            </div>

            <div className="login">
                <a className="login-link" href="/" id="home-link">Login</a>
            </div>
        </nav>

    );
}

export default Navbar;