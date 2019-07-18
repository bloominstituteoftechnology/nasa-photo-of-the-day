import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Grid({ limit }) {
    // const [nasa, setNasa, date, info, title, explanation, copyright] = useState([])
    const [img, setImg] = useState([])
    
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=gFqCZxy2iad950GrmUwLHWbpduUfaOFbyKun0zHk`)
        .then(res => {
            const img = res.data.hdurl
            setImg(img)
        })
    }, [])


    return (
        <div className='picture'>
            <img src={img} alt="alt"/>
        </div>
    )
}