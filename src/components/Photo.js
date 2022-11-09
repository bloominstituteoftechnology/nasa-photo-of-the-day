import React from "react";


const Photo = (props) => {
    return(
        <div className="nasa-data-wrapper">
            <h2>{props.photo.title}</h2>
            <h3>{props.photo.copyright}</h3>
            <img src={props.photo.hdurl} alt={props.photo.title}/>
            <p>{props.photo.explanation}</p>
        </div>
    )
}

export default Photo