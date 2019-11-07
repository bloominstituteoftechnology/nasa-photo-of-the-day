import React from "react";

const PhotoCard = props =>{
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.date}</p>
            <img src={props.picture} alt="NASA Photo of the Day"/>
            <p>{props.description}</p>

        </div>
    )

}
export default PhotoCard;