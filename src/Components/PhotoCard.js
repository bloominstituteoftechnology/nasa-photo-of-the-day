import React from "react";

 const PhotoCard = (props) => {
    return (
        <div className="photo-card">
    <h1>{props.title}</h1>
    <h2>Date: {props.date}</h2>
    <p>By: {props.copyright}</p>
    <p>{props.explanation}</p>
    <img src={props.photo} alt="somewhere in the universe..."/>
            
        </div>
    )
}

export default PhotoCard;