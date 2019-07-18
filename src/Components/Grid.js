import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from './Card';


export default function Grid({ limit }) {
    // const [nasa, setNasa, date, info, title, explanation, copyright] = useState([])
    // const [img, setImg] = useState([])
    const [date, setDate] = useState([])
    const [title, setTitle] = useState([])
    const [explanation, setExplanation] = useState([])
    const [copyright, setCopyright] = useState([])
    
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=gFqCZxy2iad950GrmUwLHWbpduUfaOFbyKun0zHk`)
        .then(res => {
            // const img = res.data.hdurl
            // setImg(img)
            // const info = res.data
            // setInfo(info)
            const date = res.data.date
            setDate(date)
            // const img = res.data.hdurl
            // setImg(img) 
            const title = res.data.title
            setTitle(title)
            const explanation = res.data.explanation
            setExplanation(explanation)
            const copyright = res.data.copyright
            setCopyright(copyright)
            // console.log(info);
            // console.log(img);
            // console.log(title);
            // console.log(explanation);
            // console.log(date);
            // console.log(copyright);
        })
    }, [])


    return (
        <div className='grid'>
            <Card date={date} title={title} explanation={explanation} copyright={copyright} />
        </div>
    )
}
    