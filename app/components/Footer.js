import React from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

const Footer = () => (
  <div className="footer-container">
    <Fade key="fade1" className="footer-hr">
      <hr />
      <h4>{data.contactSubHeading}</h4>
    </Fade>
    <a className="email-link" href={`mailto:${data.contactEmail}`} key="email">
      {data.contactEmail}
    </a>
    <div className="social-icons" key="social">
      {data.social.map(socialLink => (
        <a
          href={socialLink.url}
          target="_blank"
          rel="noopener noreferrer"
          key={`social${socialLink.id}`}
        >
          <img src={socialLink.img} alt="icons" />
        </a>
      ))}
    </div>
    <span key="caption">
      Made With ❤ by <a href="https://www.asishtom.in/">Asish Tom</a>
    </span>
  </div>
);

export default Footer;
