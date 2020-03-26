import React from "react";

import "./card.css";

function CreateCard (props) {
    console.log(props);
return (
    <div>
        <h1>{props.title} by {props.copyright}</h1>
        <div className="imgSingle">
            <img  src={props.url} alt=""/>
        </div>
            <p></p>
            <div className="date">
                <h2 >Description</h2>
                <p>{props.date}</p>

            </div>
            <br></br>
            <p></p>
            <p></p>
            <p className="paraDesc">{props.explanation}</p>
        </div>
)
}

export default CreateCard;