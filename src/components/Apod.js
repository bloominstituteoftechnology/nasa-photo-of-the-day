import React from "react";



const Apod = (props) =>{
    return(
        <div>
            <p>{props.date}</p>
            <h1>Title: {props.title}</h1>
            <img src={props.imgUrl} alt="pic of from Nasa Photo of the day"/>
            <p>{props.explanation}</p>
        </div>
    )
}


export default Apod;