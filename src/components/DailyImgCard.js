import React from "react";

import "./DailyImgCard.css";

const DailyImgCard = props => {
    console.log("DailyImgCard", props);
    return (
        <div className="img-text-container">
            <div className="img-wrapper">
                <img alt="" className="daily-pic" src={props.url} />
            </div>

            <div className="image-info">
                <div className="img-title">
                    <h2>{props.title}</h2>
                </div>
                <div className="img-explanation">
                    <h3>{props.explanation}</h3>
                </div>
            </div>
        </div>
    );
};

export default DailyImgCard;
