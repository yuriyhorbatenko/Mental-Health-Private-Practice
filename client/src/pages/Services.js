import React, { Component } from "react";
import Fade from 'react-reveal/Fade';

class Services extends Component {

    render() {
        return (
            <>
                <Fade>
                    <div id="ServicesBody"></div>
                    <div id="Divider"></div>
                    <div className="Services">
                        <h1>Services</h1>
                    </div>
                </Fade>
            </>
        )
    }
}

export default Services;