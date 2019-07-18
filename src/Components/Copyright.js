import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Grid({ limit }) {
    // const [nasa, setNasa, date, info, title, explanation, copyright] = useState([])
    const [copyright, setCopyright] = useState([])
    
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=gFqCZxy2iad950GrmUwLHWbpduUfaOFbyKun0zHk`)
        .then(res => {
            const copyright = res.data.copyright
            setCopyright(copyright)
        })
    }, [])


    return (
        <div className='copyright'>
            {copyright}
        </div>
    )
}