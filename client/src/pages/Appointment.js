import React, { Component } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";

class Appointment extends Component {

    render() {
        return (
            <>
                <Header>
                    <div className="background2"></div>
                </Header>

                <Menu />

                <div className="Appointment">
                    <h1>Schedule Appointment</h1>
                </div>
            </>
        )
    }
}

export default Appointment;