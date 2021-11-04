import React, { useState, useEffect } from 'react';
import axios from 'axios';



export default function head (date) {
    const [date, setDate] = useState()

    useEffect(()=>{
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=eTrXJWNJbEO2imxXzXwu0tfUeX9iMsUo4FdjjYby`)
        .then(res => console.log(res.data.date))
        .catch(err => console.error(err))
    },[])
    return(
        <header>
            <h1>{(data.date)}</h1>
        </header>
    )
}