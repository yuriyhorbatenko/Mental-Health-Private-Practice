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

                        <h3 className="topic-links">

                            Mental Health Delegates: 215-685-6440;<br></br>
                            Suicide and Crisis Intervention Hotline: 215-686-4420<br></br>
                            National Suicide Prevention Lifeline: 1-800-273-TALK<br></br>
                            Department of Behavioral Health Emergency Line: 215-686-4420;<br></br>
                            Philadelphia Children's Crisis Response Center/Henry Ave. CRC 215-878-2600;<br></br>
                            CHOP Emergency:215-590-1000<br></br>
                            Hall-Mercer Crisis Center: 215-829-7271<br></br>
                        </h3>

                    </div>
                </Fade>
            </>
        )
    }
}

export default Links;