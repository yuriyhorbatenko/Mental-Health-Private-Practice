import React, { Component } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";

class Services extends Component {

    render() {
        return (
            <>
                <Header>
                    <div className="background4"></div>
                </Header>

                <Menu />

                <div className="Services">
                    <h1>Services</h1>
                </div>
            </>
        )
    }
}

export default Services;