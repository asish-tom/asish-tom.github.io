import React from 'react';
import { Progress } from 'react-sweet-progress';
import data from '../yourdata';
import 'react-sweet-progress/lib/style.css';

function Skills() {
  return (
    <div className="skills-container">
      <div className="skills-grid">
        {data.skills.map(skill => (
          <div className="skill" key={`${skill.id}skill`}>
            <img className="skills-image" src={skill.img} alt="css" />
            <Progress
              className="bar"
              percent={(skill.rating / 10) * 100}
              status="success"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
