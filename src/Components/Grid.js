import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from './Card';


export default function Grid({ limit }) {
    const [nasa, setNasa] = useState([])

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-15`)
        .then(res => {
            const info = res.data
            setNasa(info)
            console.log(info);
        })
    }, [])


    return (
        <div></div>
    )
}
    