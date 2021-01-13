import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"


class About extends React.Component {
    render() {
        return (
            <div className="secion" id="about">
                <div className="container">
                    <div className="about-section">
                        <div className="content">
                            <Fade>
                                <h3>About Me</h3>
                                <hr/>
                            </Fade>
                            <p>
                                {data.aboutParaOne}
                            </p>
                            <br/>
                            <h4>Experience</h4>
                            <div className="experience-grid">
                                {data.experiences.map(exp => (
                                    <div className="exp-wrapper" key={exp.id}>
                                        <hr/>
                                        <div className="exp-head-wrapper">
                                            <h5 className="exp-head">{exp.experienceHead}</h5>
                                            <h6 className="exp-head">{exp.duration}</h6>
                                        </div>
                                        <hr/>
                                        <i><h6 className="exp-head">{exp.experienceSubHead}</h6></i>
                                        <p>
                                            {exp.experienceDescription}
                                        </p>
                                        {exp.experienceOneMajorResponsibilities.map(resp => (
                                            <div className="responsibilities" key={resp.id}>
                                                <h6 className="exp-head">{resp.responsibilityTitle}</h6>
                                                <h6 className="exp-head">{resp.responsibilitySubTitle}</h6>
                                                <p>
                                                    {resp.responsibilityDescription}
                                                </p>
                                            </div>

                                        ))}

                                    </div>
                                ))}
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            {data.aboutParaThree}

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}


export default About
