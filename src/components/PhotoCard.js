import React from "react";

function PhotoCard (props) {
   
    return (
        <div className = "photocard-div">           
            <h2>{props.title}</h2>
            <h3>{props.date}</h3>
            <img alt = "nasa image of the day" src = {props.url}/>
            <p>
                {props.explanation}
            </p>
        </div>
    );
}

export default PhotoCard;