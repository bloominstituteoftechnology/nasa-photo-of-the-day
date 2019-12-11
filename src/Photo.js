import React from "react";
import { tsPropertySignature } from "@babel/types";

const Photo = (props) => {
    return (
        <div className ="photoHolder">
            <img 
            src={props.photoOfTheDay.url} 
            alt={props.photoOfTheDay.title}
            />
        </div>
    )
}

export default Photo