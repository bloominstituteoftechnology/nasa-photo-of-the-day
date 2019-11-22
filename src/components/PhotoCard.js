import React from "react";

export default function PhotoCard(props) {
    return (
        <div className="container">
            <div className="heading">
                <h1>{props.title}</h1>
                <p>Photo of the day date: {props.date}</p>
            </div>
            <div className="pictures">

            </div>

        </div>
    )
}