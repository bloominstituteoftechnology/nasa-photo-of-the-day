import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Grid({ limit }) {
    // const [nasa, setNasa, date, info, title, explanation, copyright] = useState([])
    const [explanation, setExplanation] = useState([])
    
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=gFqCZxy2iad950GrmUwLHWbpduUfaOFbyKun0zHk`)
        .then(res => {
            const explanation = res.data.explanation
            setExplanation(explanation)
        })
    }, [])


    return (
        <div className='explanation'>
            {explanation}
        </div>
    )
}