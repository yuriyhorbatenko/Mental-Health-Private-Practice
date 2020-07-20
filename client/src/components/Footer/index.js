import React from "react";
import "./Footer.css";
import github from "../../img/github.png";

function Footer() {
    return (

        <div className="footer">
            //security risk
            <a target="_blank" href="https://github.com/yuriyhorbatenko/Project_-3">
                <img src={github} className="github" />
            </a>
        </div>

    );
}

export default Footer;
