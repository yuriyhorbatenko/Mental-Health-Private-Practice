import React, { Component } from "react";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import AboutImage from "../../img/about.jpg";

class About extends Component {

    render() {
        return (
            <>
                <Fade>
                    <div id="AboutBody"><Zoom cascade><div id="Body-Text">About Me</div></Zoom></div>
                    <div id="Divider"></div>

                    <div className="About-body">

                        <div className="About-section">

                            <Zoom>
                                <div className="About-img">
                                    <img src={AboutImage} width="150"></img>
                                </div>

                                <div className="About-text">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>M</span>y goal as therapist is to help you uncover your potential and lead a life
                                    that is worth celebrating. While we can&#39;t change difficult situations of the
                                    past, we can work together to better understand and resolve challenges in
                                    your life. Therapy can provide us with an opportunity to reflect on the
                                    changes we need to make, re-establish direction and balance in our daily
                                    lives.  I received my graduate degree from University of Pennsylvania,
                                    extensively trained in Cognitive Behavioral Therapy. I am also Board
                                    Certified Holistic Health Practitioner and Certified Health and Wellness
                                    coach. By applying CBT and DBT therapy approaches and techniques, we
                                    will unearth long-standing behavior patterns or negative perceptions that
                                    may be holding you back from experiencing a more fulfilling and
                                    meaningful life.<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>I</span>f you&#39;re looking for extra support and guidance through a challenging
                                    situation or you&#39;re just ready to move in a new direction in your life, I look
                                    forward to working with you to achieve your goals.
                                </div>
                            </Zoom>

                        </div>
                    </div>
                </Fade>
            </>
        )
    }
}

export default About;