import React from "react";

const NasaCard = (props) => {
    return (
        <div className = "cardContainer">
            <h1>{props.data.title}</h1>
            <h2>{props.data.copyright}</h2>
            <h2>Date : {props.data.date}</h2>
        <div className = "cardImgInfo">
            <img src = {props.data.url} />
            <p>{props.data.explanation}</p>
        </div>
        </div>
    )
}

export default NasaCard; 