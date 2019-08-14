import React from "react";

function PhotoCard (props) {
   
    return (
        <div>
            <h2>{props.title}</h2>
            <img src = {props.url}/>
            <p>
                {props.explanation}
            </p>
        </div>


    );

}

export default PhotoCard;