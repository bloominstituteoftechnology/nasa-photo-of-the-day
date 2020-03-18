import React from "react";

const PhotoCard = (props) => {
    return (
        <div className="photo-list">
            <img src={props.url} alt=""/>
            <p>{props.explanation}</p>
            <p>Date Taken: {props.date}</p>
        </div>
    )
}

export default PhotoCard;