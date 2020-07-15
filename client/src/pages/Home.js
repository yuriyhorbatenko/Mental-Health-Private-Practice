import React, { Component } from "react";
import Fade from 'react-reveal/Fade';

class Home extends Component {

    render() {
        return (
            <>
                <Fade>
                    <div id="HomeBody">
                        <div id="Home-Text">Some cool text will be here</div>
                    </div>
                </Fade>
            </>
        )
    }
}

export default Home;