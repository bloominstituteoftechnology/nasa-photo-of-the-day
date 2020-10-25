import React from "react";
import "./Header.css"

const PhotoSection = props =>(
    <div>
    <img src={props.url} alt="NASA PotD">{props.title}</img>
    
    </div>

)

export default PhotoSection;