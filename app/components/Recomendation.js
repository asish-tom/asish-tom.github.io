import React from 'react';
import Fade from 'react-reveal/Fade';

function Recommendation() {
  return (
    <Fade>
      <div className="header">
        <h3>Testimonials</h3>
      </div>

      <ul className="section-info" tabIndex="-1">
        <li id="ember2605" className="pv-recommendation-entity ember-view">
          <div className="pv-recommendation-entity__header">
            <a
              data-control-name="recommendation_details_profile"
              href="/in/geevarghesepc/"
              id="ember2606"
              className="pv-recommendation-entity__member ember-view"
            >
              <img
                width="auto"
                src="https://media-exp1.licdn.com/dms/image/C5103AQFvlNwX75Rd9g/profile-displayphoto-shrink_100_100/0/1575657126267?e=1616025600&amp;v=beta&amp;t=FYI6AvDDd5rtwPuMZcibBHjncjCrQ46uusoF9jqKlQg"
                loading="lazy"
                height="auto"
                alt="Geevarghese P C"
                id="ember2607"
                className="EntityPhoto-circle-4 fl lazy-image ember-view"
              />

              <div className="pv-recommendation-entity__detail">
                <h3 className="t-16 t-black t-bold">Geevarghese P C</h3>
                <p className="pv-recommendation-entity__headline t-14 t-black t-normal pb1">
                  Tech Lead at Tech Lead at KreditBee(Finnovation tech
                  solutions)
                </p>
                <p className="t-12 t-black--light t-normal">
                  October 26, 2020, Geevarghese managed Asish directly
                </p>
              </div>
            </a>
          </div>
          <div className="pv-recommendation-entity__highlights">
            <blockquote className="pv-recommendation-entity__text relative">
              <div id="ember2608" className="ember-view">
                <span className="lt-line-clamp__raw-line">
                  <q>
                    Asish played an important role in data extraction,
                    transformation, clean-up framework in analytics project I
                    led. Being a passionate developer, he made a significant
                    contribution to the framework as well as the workflow. He
                    got a good hold over Python frameworks like Django, Flask,
                    Pandas, and various pdf extraction libraries, also possess a
                    good understanding of Docker and AWS lambda. He would be a
                    great addition to any team.
                  </q>
                </span>
              </div>
            </blockquote>
          </div>
        </li>
        <li id="ember2609" className="pv-recommendation-entity ember-view">
          <div className="pv-recommendation-entity__header">
            <a
              data-control-name="recommendation_details_profile"
              href="/in/chuck-mobley-a3378a4/"
              id="ember2610"
              className="pv-recommendation-entity__member ember-view"
            >
              {' '}
              <img
                width="auto"
                src="https://media-exp1.licdn.com/dms/image/C4E03AQEAOU5sdyYmVg/profile-displayphoto-shrink_100_100/0/1517702945478?e=1616025600&amp;v=beta&amp;t=r9Kd6d-029wCDVzBA-w5rZYEtMHchEKEW9OEl1jZ1-U"
                loading="lazy"
                height="auto"
                alt="Chuck Mobley"
                id="ember2611"
                className="EntityPhoto-circle-4 fl lazy-image ember-view"
              />
              <div className="pv-recommendation-entity__detail">
                <h3 className="t-16 t-black t-bold">Chuck Mobley</h3>
                <p className="pv-recommendation-entity__headline t-14 t-black t-normal pb1">
                  CTO at VNDLY CTO at VNDLY Inc
                </p>
                <p className="t-12 t-black--light t-normal">
                  June 23, 2019, Chuck managed Asish directly
                </p>
              </div>
            </a>
          </div>
          <div className="pv-recommendation-entity__highlights">
            <blockquote className="pv-recommendation-entity__text relative">
              <div id="ember2612" className="ember-view">
                <q>
                  <span className="lt-line-clamp__line">
                    Asish demonstrated exceptional work ethic and played a
                    critical
                  </span>
                  <span className="lt-line-clamp__line">
                    role helping our company build a new SaaS product,
                    contributing
                  </span>
                  <span className="lt-line-clamp__line">
                    to application development using Python, Javascript and
                  </span>
                  <span className="lt-line-clamp__line lt-line-clamp__line--last">
                    PostgreSQL. He would be a great addition to any team.
                  </span>
                </q>

                <span className="lt-line-clamp__ellipsis lt-line-clamp__ellipsis--dummy">
                  {' '}
                </span>
              </div>
            </blockquote>
          </div>
        </li>
      </ul>
    </Fade>
  );
}

export default Recommendation;
