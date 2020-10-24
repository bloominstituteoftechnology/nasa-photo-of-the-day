import React from "react";

const PhotoSection = props =>(
    <div>
    <img src={props.url} alt="NASA PotD">{props.title}</img>
    
    </div>

)

export default PhotoSection;