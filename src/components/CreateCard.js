import React from "react";

import "./card.less";

function CreateCard (props) {
return (
    <div>
        <h1>{props.title} by {props.copyright}</h1>
            <img src={props.url} />
            <p className="">{props.date}</p>
            <p></p>
            <h2>Description</h2>
            <p className="">{props.explanation}</p>
        </div>
)
}

export default CreateCard;