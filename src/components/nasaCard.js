import React from "react";

export const MakeCard = (props)=>{
    return (
        <div className = "card">
            <h1>{props.title}</h1>
            <img src = {props.img}/>
            <h2>Artist:{props.copyright}</h2>
            <p>{props.explanation}</p>
        </div>
    );
}