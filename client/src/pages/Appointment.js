import React, { Component } from "react";
import Fade from 'react-reveal/Fade';

class Appointment extends Component {

    render() {
        return (
            <>
                <Fade>
                    <div id="AppointmentBody"></div>
                    <div id="Divider"></div>
                    <div className="Appointment">
                        <h1>Schedule Appointment</h1>
                    </div>
                </Fade>
            </>
        )
    }
}

export default Appointment;