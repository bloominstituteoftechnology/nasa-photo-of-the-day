import React, { useState, useEffect } from 'react';
import "../App.css";




// Child
function Info(props){
// console.log(props)     // Gotta see what is going on with the props.

    return (
        <p>
            <h2>{props.apodData.title}</h2>
            <p>{props.apodData.date}</p>
            <p>{props.apodData.explanation}</p>
            <a href={props.apodData.hdurl}>HIGH RESOLUTION IMAGE*</a>
        </p>
    )
}


export default Info;


{/* <p>{JSON.stringify(props.apodData)}</p> */} 
