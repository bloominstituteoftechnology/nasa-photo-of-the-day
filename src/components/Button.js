import React from "react";

export default function Button () {
    return <button onclick="location.href = './FirstPhoto';" id="myButton" class="float-left submit-button" >First NASA Photo!</button>
}

const button = ({title, date, url, explanation, copyright}) => {
    return (
    <div>
        
        <h3>{title}<br></br>{date}</h3>
        <img src={url} alt="nasa-pic"/>
        <p>{explanation}</p>
        <p>{copyright}</p>
        
    </div>
    )
}