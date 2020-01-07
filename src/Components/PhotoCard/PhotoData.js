import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";
import './Photo.scss';

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
        <div className="wrapper"> 
            <div className="photo">
                 <PhotoCard props={photos.hdurl} />
            </div>
            
            <div className="info">
                <p className="date"> {photos.date} </p>
                <h3 className="photoTitle">{photos.title}</h3>
                <p className="photoExplanation">{photos.explanation}</p>
            </div>
        </div>
    );
}

