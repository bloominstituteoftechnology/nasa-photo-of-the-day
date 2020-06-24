import React, { useState, useEffect } from "react"
import axios from "axios"
import ImageCard from "./ImageCard"

export default function ImageList() {

    const today = new Date()

    const [images, setImages] = useState([])
    const [date, setDate] = useState({
        day: today.getDate(),
        month: today.getMonth() + 1,
        year: today.getFullYear()
    })

    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=nUuIApI33z9ii9bOvfvcgpBhGDCqsYQyMjzIgGd0&date=" + `${date.year}-${date.month}-${date.day}`)
            .then(res => {
                setImages(res)
            })
            // .then(res => console.log(res.data.url))
            .catch(err => console.log(err))
    }, [date])

    if (!images.data) return <h3>Loading...</h3>;
    
    console.log(images)
    return ( 
        <ImageCard date={date} changeDate={setDate} data={images.data}/>
        )
}