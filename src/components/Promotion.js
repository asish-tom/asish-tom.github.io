import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

class Promotion extends React.Component {
    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="promotion-container">
                        <Fade cascade>
                            <h1>{data.promotionHeading}</h1>
                        </Fade>
                        <p>{data.promotionPara}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Promotion
