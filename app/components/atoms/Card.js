import React from 'react';

const Card = x => (
  <div className="card">
    <a href={x.projectLink || '#'}>
      <div className="header">{x.heading}</div>
      {sanitize(x.paragraph)}
    </a>
  </div>
);
function sanitize(html) {
  const doc = document.createElement('div');
  doc.innerHTML = html;
  return doc.innerHTML;
}

export default Card;
