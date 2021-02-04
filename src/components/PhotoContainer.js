import React from "react";
import Button from "./Button"

const PhotoContainer = ({title, date, url, explanation, copyright}) => {
    return (
    <div>
        
        <h3>{title}<br></br>{date}</h3>
        <img src={url} alt="nasa-pic"/>
        <p>{explanation}</p>
        <p>{copyright}</p>

        <Button />
        
    </div>
    )
}

export default PhotoContainer;