import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function body (props) {
    const {title, explanation} = props;
    const[title, setTitle] = useState()
    const [explanation, setExplanation] = useState('')
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=eTrXJWNJbEO2imxXzXwu0tfUeX9iMsUo4FdjjYby`)
        .then(res => console.log(res.data))
        .catch(err => console.error(err))
    })

    return (
        <div class='bod'>
            <h1>{data.title}</h1>
            <p>{data.explanation}</p>
        </div>
    )
}