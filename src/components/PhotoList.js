import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoCard from './PhotoCard';


export default function PhotoList() {
    const [photos, setPhotos] = useState("");
    const [title, setTitle] = useState("");
    const [date, setDate] = useState([]);
    const [explaination, setExplaination] = useState("");

    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=l1YmSTQeiT2I9N2BoMBIU6dMhfu28chM88RFNqOT")
            .then(response => {
                console.log(response.data);
                setPhotos(response.data.url);
                setTitle(response.data.title);
                setDate(response.data.date);
                setExplaination(response.data.explaination);
            })
            
            .catch(error => {
                console.log("error");
            })
    }, []);

    return (
        <div>
            <PhotoCard title={photos.title} url={photos.url} explaination={photos.explaination} date={photos.date} />
        </div>
    )
}

