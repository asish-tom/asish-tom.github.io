import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import Skills from "./skills";

class Home extends React.Component {
    render() {
        return (
            <div>
            <div className="section" id="home">
                <div className="container">
                    <div className="header-wrapper">
                        <Fade bottom>
                            <h6>
                                Hi, I'm {data.name}{" "}
                                <span role="img" aria-label="Emoji"/>
                            </h6>
                        </Fade>
                        <Fade >
                            <div className="heading-wrapper">
                                <h2>
                                    {data.headerTagline[0]
                                        ? data.headerTagline[0]
                                        : "Building digital"}
                                </h2>
                                <h3>
                                    {" "}
                                    {data.headerTagline[1]
                                        ? data.headerTagline[1]
                                        : "products, brands"}
                                </h3>
                            </div>
                        </Fade>
                        <Fade  >
                            <img src={data.aboutImage} className="image-wrapper" alt="about"/>
                        </Fade>

                        <Fade>
                            <p className="summary">{data.headerParagraph}</p>
                        </Fade>
                        <Fade bottom>
                            <a
                                href={`mailto:${
                                    data.contactEmail ? data.contactEmail : "me@asishtom.in"
                                }`}
                                className="primary-btn"
                            >
                                CONNECT WITH ME
                            </a>
                        </Fade>
                    </div>
                </div>
            </div>
            <Skills/>
            </div>
        )
    }
}

export default Home
