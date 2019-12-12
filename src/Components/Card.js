import React from "react";

function Card(props) {
    return(
        <div className="card">
            <h2>{props.title}</h2>
            <img src={props.hdurl}/>
            <h3>{props.date}</h3>
            <p>{props.explanation}</p>
        </div>
    );
}

export default Card;