import axios from "axios";
import React, { useEffect, useState } from "react";

export function NasaImages() {
    const [nasaImg, setNasaImg] = useState("");
    const [explain, setExplain] = useState("");
    const [title, setTitle] = useState("");
    

    useEffect(() => { 

        axios.get(`https://api.nasa.gov/planetary/apod?api_key=vwb3iV4BfTbtDLyxbPwsQCVdb5MTG6gJoVWXFQwD`)
            .then(res => {
            console.log(res.data)
            setNasaImg(res.data.url)
            setExplain(res.data.explanation)
            setTitle(res.data.title)
            }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div style={{marginBottom: "20px"}}>
            <h1 style={{color: "white"}}>{title}</h1>
            <img src={nasaImg}/>
            <p style={{color: "white", width: "70%", margin: "0 auto"}}>{explain}</p>
        </div>
    )

}