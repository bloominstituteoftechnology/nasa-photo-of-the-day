import React from "react";
import { tsPropertySignature } from "@babel/types";

function Info(props){

    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.date}</p>
            <p>{props.info}</p>
        </div>
    )
}
export default Info;