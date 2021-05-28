import React, { useState, useEffect } from 'react';
import "../App.css";




// Child
export default function Info(props){

// const data = props.apodData; // Simply removes the need to type 'props'
    return (
        <>
            <h1>{props.apodData.title}</h1>
            <div>{props.apodData.date}</div> {/* Cannot do props.apodData. Must be props.apodData.something. */}
            <p>{props.apodData.explanation}</p>
        </>
    )
}