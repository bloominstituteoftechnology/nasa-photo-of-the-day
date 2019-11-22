import React, { useState, useEffect } from 'react';
import PhotoCard from './PhotoCard';
import axios from 'axios';



export default function PhotoList() {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [url, setUrl] = useState("");
    const [explanation, setExplanation] = useState("");

    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=l1YmSTQeiT2I9N2BoMBIU6dMhfu28chM88RFNqOT")
            .then(response => {
                console.log(response.data);
                setTitle(response.data.title);
                setDate(response.data.date);
                setUrl(response.data.url)
                setExplanation(response.data.explanation);
            })
            
            .catch(error => {
                console.log("error");
            })
    }, []);

    return (
        <div>
            <PhotoCard title={title} url={url} explanation={explanation} date={date} />
        </div>
    )
}

