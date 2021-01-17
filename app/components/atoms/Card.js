import React from 'react';
import DOMPurify from 'dompurify';

const Card = x => (
  <div className="card">
    <a href={x.projectLink || '#'}>
      <div className="header">{x.heading}</div>
      const mySafeHTML = DOMPurify.sanitize(myHTML);
      <div
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(x.paragraph) }}
      />
    </a>
  </div>
);

export default Card;
