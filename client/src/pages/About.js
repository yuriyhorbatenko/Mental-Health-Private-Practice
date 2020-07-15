import React, { Component } from "react";
import Fade from 'react-reveal/Fade';

class About extends Component {

    render() {
        return (
            <>
                <Fade>
                    <div id="AboutBody"></div>
                    <div id="Divider"></div>

                    <div className="about-me">
                        <h1>About Me</h1>
                    </div>
                </Fade>
            </>
        )
    }
}

export default About;