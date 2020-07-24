import React, { Component } from "react";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

class Appointment extends Component {

    render() {
        return (
            <>
                <Fade>
                    <div id="AppointmentBody"><Zoom cascade><div id="Body-Text">Schedule Appointment</div></Zoom></div>
                    <div id="Divider"></div>
                    <div className="Appointment-body">

                    </div>
                </Fade>
            </>
        )
    }
}

export default Appointment;