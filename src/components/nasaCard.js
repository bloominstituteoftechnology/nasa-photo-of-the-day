import React from "react";

export const MakeCard = (props)=>{
    return (
        <div className = "card">
            <h1>{props.title}</h1>
            <p>Date: {props.date}</p>
            <img src = {props.img}/>
            {
                props.copyright ?
                <h2> Artist: {props.copyright}</h2>
                :
                <h2>Artist not available</h2>
            }
            
            <p>{props.explanation}</p>
        </div>
    );
}