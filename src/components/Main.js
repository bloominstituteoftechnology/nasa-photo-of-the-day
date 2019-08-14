import React from "react";
import CreateMain from "./CreateMain";

// Props only needs to be typed on the RECEIVING component. Like genes. You inherit from parents.

const Main = props => {
    return (
        <div className="main">
            <h1>{props.title}</h1>
            <img src={props.image} />
            <h3>{props.day}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export default Main;