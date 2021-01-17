import React from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

function Promotion() {
  return (
    <div className="promotion-container">
      <Fade cascade>
        <h1>{data.promotionHeading}</h1>
      </Fade>
      <p>{data.promotionPara}</p>
    </div>
  );
}

export default Promotion;
