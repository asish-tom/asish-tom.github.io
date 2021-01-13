import React from "react"

const Card = ({heading, paragraph, imgUrl, projectLink}) => {
    return (
        <div>
            <div className="card">
                    <a href={projectLink ? projectLink : "#"}>
                    <div className="header">{heading}</div>
                    <p className="preview" dangerouslySetInnerHTML={{__html: paragraph}}/>
                    </a>
            </div>
        </div>
    )
}

export default Card
