import React, { useState, useEffect } from "react";
import axios from "axios";
// import PhotoCard from "./PhotoCard";

export default function PhotoData() {

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=JnWo6HiIwC9BG0xa2UyobaexzaMVqCbQi9h9hs6q')
        .then(res => {
            console.log(res.data);
            setPhotos(res.data);
        })
    }, [])

    return (
        <div>
            return <img src={photos.hdurl} />
           
            </div>
    );
}

