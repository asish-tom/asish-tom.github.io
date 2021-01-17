import React from 'react';
import Fade from 'react-reveal/Fade';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import data from '../yourdata';
import 'react-vertical-timeline-component/style.min.css';
import Skills from './skills';

function Resume() {
  return (
    <div className="about-section">
      <Fade>
        <h3 className="about-title">About Me</h3>
        <hr />
      </Fade>
      <p>{data.aboutParaOne}</p>
      <br />
      <div className="exp-edu-grid">
        <div className="sub-section">
          <h4> Education</h4>
          <div className="timeline">
            <VerticalTimeline className="timeline-outer" layout="1-column-left">
              {data.education.map(edu => (
                <VerticalTimelineElement
                  key={edu.id}
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background:
                      'linear-gradient(to top, #1D26C1, #617fe0, #19C173)',
                    color: '#fff',
                  }}
                  contentArrowStyle={{
                    borderRight: '7px solid  rgb(33, 150, 243)',
                  }}
                  date={edu.duration}
                  iconStyle={{
                    background: 'rgb(33, 150, 243)',
                    color: '#fff',
                  }}
                >
                  <h3 className="vertical-timeline-element-title">
                    {edu.course}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {edu.institute}
                  </h4>
                  <p>{edu.qualification}</p>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
        <div className="sub-section">
          <h4>Experience</h4>
          {/* <div className="experience-grid"> */}
          {/*    {data.experiences.map(exp => ( */}
          {/*        <div className="exp-wrapper" key={exp.id}> */}
          {/*            <hr/> */}
          {/*            <div className="exp-head-wrapper"> */}
          {/*                <h5 className="exp-head">{exp.experienceHead}</h5> */}
          {/*                <h6 className="exp-head">{exp.duration}</h6> */}
          {/*            </div> */}
          {/*            <hr/> */}
          {/*            <i><h6 className="exp-head">{exp.experienceSubHead}</h6></i> */}
          {/*            <p> */}
          {/*                {exp.experienceDescription} */}
          {/*            </p> */}
          {/*            {exp.experienceOneMajorResponsibilities.map(resp => ( */}
          {/*                <div className="responsibilities" key={resp.id}> */}
          {/*                    <h6 className="exp-head">{resp.responsibilityTitle}</h6> */}
          {/*                    <h6 className="exp-head">{resp.responsibilitySubTitle}</h6> */}
          {/*                    <p> */}
          {/*                        {resp.responsibilityDescription} */}
          {/*                    </p> */}
          {/*                </div> */}

          {/*            ))} */}

          {/*        </div> */}
          {/*    ))} */}
          {/* </div> */}
          {/* <br/> */}
          {/* <br/> */}
          {/* <br/> */}
          <div className="timeline">
            <VerticalTimeline className="timeline-outer" layout="1-column-left">
              {data.experiences.map(exp => (
                <VerticalTimelineElement
                  key={exp.id}
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background:
                      'linear-gradient(to top, #5D26C1, #a17fe0, #59C173)',
                    color: '#fff',
                  }}
                  contentArrowStyle={{
                    borderRight: '7px solid  rgb(33, 150, 243)',
                  }}
                  date={exp.duration}
                  iconStyle={{
                    background: 'rgb(33, 150, 243)',
                    color: '#fff',
                  }}
                >
                  <h3 className="vertical-timeline-element-title" />
                  <h4 className="vertical-timeline-element-subtitle">
                    {exp.experienceHead}
                  </h4>
                  <p>{exp.experienceSubHead}</p>

                  <VerticalTimeline layout="1-column-left">
                    {exp.experienceOneMajorResponsibilities.map(resp => (
                      <VerticalTimelineElement
                        key={resp.id}
                        className="vertical-timeline-element--work"
                        contentStyle={{
                          background: 'rgb(33, 150, 243)',
                          color: '#fff',
                        }}
                        contentArrowStyle={{
                          borderRight: '7px solid  rgb(33, 150, 243)',
                        }}
                        date={exp.duration}
                        iconStyle={{
                          background: 'rgb(33, 150, 243)',
                          color: '#fff',
                        }}
                      >
                        <h3 className="vertical-timeline-element-title">
                          {resp.designation}
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                          {resp.responsibilityTitle}
                        </h4>
                        <p>{exp.experienceSubHead}</p>
                      </VerticalTimelineElement>
                    ))}
                  </VerticalTimeline>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
        <div className="sub-section">
          <h4>Skill</h4>
          <Skills />
        </div>
      </div>

      <p>{data.aboutParaThree}</p>
    </div>
  );
}

export default Resume;
