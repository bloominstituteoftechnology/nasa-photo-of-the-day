import React from "react";

const PhotoCard = (props) => {
    return(
        <div>
            <h1>
                {props.title}
            </h1>
            <h2>
                {props.date}
            </h2>
            <img src = {props.url} alt="NASA POTD"/>
        <div>
            <h3>
                Details
            </h3>
            <p>
            {props.explanation}
            </p>
        </div>
        </div>
    );
};

export default PhotoCard;