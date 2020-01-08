import React from "react";

const pictureCard = props => {
    return (
        <div className="picture-card">
            <div className="card-head">
                <h2>{props.tile}</h2>
                <h3>{props.date}</h3>
            </div>
            <div className="card-img">
                <img src={props.hdurl}></img>
            </div>
            <div className="card-description">
                <p>{props.description}</p>
            </div>
            
        </div>
    )
}

export default pictureCard;