import React from "react";
import "./Image.css";

function Image({ url }){
   
    return(
    <img className='apod' src={url} alt=''/>
    )
    
}

export default Image;