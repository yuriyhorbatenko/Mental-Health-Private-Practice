import React, { Component } from "react";
import Fade from 'react-reveal/Fade';

class Links extends Component {

    render() {
        return (
            <>
                <Fade>
                    <div id="LinksBody"></div>
                    <div id="Divider"></div>
                    <div className="Links">
                        <h1>Helpful Links</h1>
                    </div>
                </Fade>
            </>
        )
    }
}

export default Links;