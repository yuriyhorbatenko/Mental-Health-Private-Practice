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

                        <div className="specialties topic-section">
                            <h2 className="topic-header">Specialties</h2>
                            <h3 className="topic-text">
                                •	ADHD <br></br>
                                •	Anxiety <br></br>
                                •	Depression <br></br>
                                •	PTSD and Trauma <br></br>
                                •	Addiction <br></br>
                                •	Bipolar Disorder <br></br>
                            </h3>
                        </div>

                        <div className="Issues topic-section">
                            <h2 className="topic-header">Issues</h2>
                            <h3 className="topic-text">
                                •	Behavioral Issues <br></br>
                                •	Coping Skills <br></br>
                                •	Dual Diagnosis <br></br>
                                •	Family Conflict <br></br>
                                •	Life Coaching <br></br>
                                •	Life Transitions <br></br>
                                •	Obesity <br></br>
                                •	Obsessive-Compulsive (OCD) <br></br>
                                •	Peer Relationships <br></br>
                                •	Phobias, Social Anxiety, Health Anxiety <br></br>
                                •	Relationship Issues <br></br>
                                •	School Issues <br></br>
                                •	Self Esteem <br></br>
                                •	Stress <br></br>
                                •	Transgender <br></br>
                                •	Trauma and PTSD <br></br>
                                •	Women's Issues <br></br>
                                •	Anger Management <br></br>
                            </h3>
                        </div>

                        <div className="Age topic-section">
                            <h2 className="topic-header">Age</h2>
                            <h3 className="topic-text">
                                •	Adolescents / Teenagers (14 to 19) <br></br>
                                •	Adults <br></br>
                                •	Elders (65+) <br></br>
                            </h3>
                        </div>

                        <div className="Sexuality topic-section">
                            <h2 className="topic-header">Sexuality</h2>
                            <h3 className="topic-text">
                                •	Bisexual <br></br>
                                •	Gay <br></br>
                                •	Lesbian <br></br>
                            </h3>
                        </div>

                    </div>
                </Fade>
            </>
        )
    }
}

export default Services;