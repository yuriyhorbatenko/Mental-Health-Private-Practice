import React, { Component } from "react";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

class About extends Component {

    render() {
        return (
            <>
                <Fade>
                    <div id="AboutBody"><Zoom cascade><div id="Body-Text">About Me</div></Zoom></div>
                    <div id="Divider"></div>

                    <div className="About-body">

                    </div>
                </Fade>
            </>
        )
    }
}

export default About;