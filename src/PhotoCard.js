import React from "react";

const PhotoCard = props => {

    console.log(props);

    return (
        <div key={props.date} className="photo">
            <span>{props.date}</span>
            <img src={props.Img}/>
            <h1>{props.title}</h1>
            <h3>By: {props.copyright}</h3>
            <p>{props.explanation}</p> 
        </div>

    );
};

export default PhotoCard;