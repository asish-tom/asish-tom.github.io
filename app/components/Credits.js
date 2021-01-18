import React from 'react';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCss3,
  faGithub,
  faGoogle,
  faHtml5,
  faReact,
  faStackOverflow,
  faUbuntu,
} from '@fortawesome/free-brands-svg-icons';

function Credits() {
  return (
    <div className="blog-wrapper">
      <Fade>
        <h5>Gratitude Is The Most Beautiful Prayer</h5>
        <h3>This made possible by</h3>
        <hr />
        <FontAwesomeIcon icon={faReact} size="3x" />
        <FontAwesomeIcon icon={faHtml5} size="3x" />
        <FontAwesomeIcon icon={faCss3} size="3x" />
        <FontAwesomeIcon icon={faUbuntu} size="3x" />
        <FontAwesomeIcon icon={faStackOverflow} size="3x" />
        <FontAwesomeIcon icon={faGoogle} size="3x" />
        <FontAwesomeIcon icon={faGithub} size="3x" />
      </Fade>
    </div>
  );
}

export default Credits;
