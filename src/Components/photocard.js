import React from "react";


export default function PhotoCard(props) {

    return (
        <div className="photoCard">
        <h2>{props.title}</h2>
        <h3>{props.date}</h3>
        <img className="photoDay" src={props.hdurl} alt="space stuff"/>
        <p>{props.explanation}</p>
        </div>
    )
}