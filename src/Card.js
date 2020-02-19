import React, {useEffect, useState} from "react";
import axios from 'axios'

function Card(props){
    console.log('card props', props)
    return(
        <>
            <h1>Welcome!</h1>
            <h2>{props.nasa.title}</h2>
            <img src={props.nasa.url} alt='photo of the day'/>
            <p>{props.nasa.explanation}</p>
        </>
    )
}

export default Card