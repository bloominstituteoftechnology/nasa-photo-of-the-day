import React, { useState, useEffect } from 'react'
import PhotoCard from './PhotoCard';
import axios from 'axios';

export default function Photo() {
    const [photo, setPhoto] = useState({});

    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=krbpcHPEGT17nSngcBn42n2chF1bgvgtSnraVZuW')
        .then(response => {
            const photo = response.data;
            setPhoto(photo);
        })
        .catch(error => {
            console.log('The Nasa API could not be reached', error);
        })
    }, []);
    return (
        <div>
            <PhotoCard title={photo.title} copyright={photo.copyright} url={photo.url} explanation={photo.explanation} hdurl={photo.hdurl} date={photo.date}/>
        </div>
    )
}