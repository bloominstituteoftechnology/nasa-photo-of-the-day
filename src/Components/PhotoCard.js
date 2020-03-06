import React from "react";


function PhotoCard (props) {
    return (
        <div className ="Apod-Card">
            <img className ="Apod-img" alt ="NASA APOD" src = {props.imgUrl}/>
            <h1>{props.title}</h1>
            <h2>{props.date}</h2>
            <p>{props.explanation}</p>


        </div>
    
    
    )

 }

 export default PhotoCard;