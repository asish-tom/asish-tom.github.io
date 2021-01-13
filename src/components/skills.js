import React from "react"
import data from "../yourdata"
import StarRatings from 'react-star-ratings';

class Skills extends React.Component {
    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="skills-container">
                        <div className="skills-grid">
                            {data.skills.map(skill => (
                                <div className="skill" key={skill.id + "skill"}>
                                    <img className="skills-image" src={skill.img} alt="css"/>
                                   <StarRatings key={skill.id + "rating"}
                                                 rating={skill.rating}
                                                 starRatedColor="gold"
                                                 changeRating={function () {
                                                     return 1
                                                 }}
                                                 numberOfStars={10}
                                                 starDimension="15px"
                                                 starSpacing="3px"
                                                 name='rating'
                                    />
                                    <p>{skill.para}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills
