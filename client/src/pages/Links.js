import React, { Component } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";

class Links extends Component {

    render() {
        return (
            <>
                <Header>
                    <div className="background3"></div>
                </Header>

                <Menu />

                <div className="Links">
                    <h1>Helpful Links</h1>
                </div>
            </>
        )
    }
}

export default Links;