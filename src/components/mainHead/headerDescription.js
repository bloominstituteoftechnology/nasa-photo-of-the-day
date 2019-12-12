import React from "react";

export default function HeaderDescription(props){
    console.log(props.displayText);
    return(
        <div className="descripWrap">
        <h3>{props.displayText.title}</h3>
        <h4>{props.displayText.date}</h4>
        <p>{props.displayText.explanation}</p>
        </div>
    )
}