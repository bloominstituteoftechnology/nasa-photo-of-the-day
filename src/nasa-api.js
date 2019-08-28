import axios from "axios";
import React, { useEffect, useState } from "react";

export function NasaImages() {
    const [nasaImg, updateNasaImg] = useState("");
    const [explain, updateExplain] = useState("")
    useEffect(() => { 
        axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
            .then(res => {
            console.log(res.data)
            updateNasaImg(res.data.url)
            updateExplain(res.data.explanation)
            }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div style={{marginBottom: "20px"}}>
            <img src={nasaImg}/>
            <p style={{color: "white", width: "70%", margin: "0 auto"}}>{explain}</p>
        </div>
    )

}