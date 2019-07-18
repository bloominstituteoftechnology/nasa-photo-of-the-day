import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Grid({ limit }) {
    // const [nasa, setNasa, date, info, title, explanation, copyright] = useState([])
    const [title, setTitle] = useState([])
    
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=gFqCZxy2iad950GrmUwLHWbpduUfaOFbyKun0zHk`)
        .then(res => {
            const title = res.data.title
            setTitle(title)
        })
    }, [])


    return (
        <div className='title'>
            {title}
        </div>
    )
}