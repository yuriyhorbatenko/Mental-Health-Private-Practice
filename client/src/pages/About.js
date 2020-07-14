import React, { Component } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";

class About extends Component {

    render() {
        return (
            <>
                <Header>
                    <div id="background1"></div>
                </Header>

                <Menu />

                <div className="about-me">
                    <h1>About Me</h1>
                </div>
            </>
        )
    }
}

export default About;