import React from "react";
import "./Menu.css";

function Menu() {
    return (

        <div className="menu">

            <ul>
                <li><a href="/about">About Me</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/appointment">Schedule Appointment</a></li>
                <li><a href="/links">Helpful Links</a></li>
            </ul>

        </div>

    );
}

export default Menu;