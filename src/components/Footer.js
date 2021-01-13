import React from "react"
// @ts-ignore
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Footer = () => {
    return (
        <div className="section" id="contact" key={"contact1"}>
            <div className="container">
                <div className="footer-container">
                    <Fade  key={"fade1"}>
                        <h4>{data.contactSubHeading}</h4>
                    </Fade>
                     <a className="email-link" href={`mailto:${data.contactEmail}`} key={"email"}>
                        {data.contactEmail}
                     </a>
                    <div className="social-icons" key={"social"}>
                        {data.social.map(socialLink => (
                            <a
                                href={socialLink.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={"social"+socialLink.id}
                            >
                                <img src={socialLink.img} alt="icons"/>
                            </a>
                        ))}
                    </div>
                    <span key={"caption"}>
                        Made With ❤ by {" "}
                        <a href="https://www.asishtom.in/">Asish Tom</a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer
