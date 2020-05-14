import React from "react";
import CardContent from "./Img.js"


export default function ImageElement(props) {
    return (
        <div className = "imagecontainer">
           <img src={props.url} />
        </div>
    )
}