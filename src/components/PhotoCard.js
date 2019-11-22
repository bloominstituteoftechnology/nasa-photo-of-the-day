import React from "react";
import PhotoList from "./PhotoList"

export default function PhotoCard(props) {
    return (
        <div className="container">
            <div className="heading">
                <h1>{props.title}</h1>
                <p>Photo of the day date: {props.date}</p>
            </div>
            <div className="pictures">
                <img src={props.url}/> 
            </div>

        </div>
    )
}