import React from "react";

const ApodCard = (props) => {
    return (
        <div className="apodCard">
            <h1>Astronomy Picture of the Day</h1>
            <img src={props.hdurl}></img>
            <h3>Copyright: {props.copyright}</h3>
            <h3>Date: {props.date}</h3>
            <p>Explanation: {props.explanation}</p>
        </div>
    )
};

export default ApodCard;