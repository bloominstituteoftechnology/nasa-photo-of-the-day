import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PODCard from './PODCard';





export default function POD() {

    const [pod, setPod] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=RBEYMHy5En71alookaNZCgQZCcSAddkar32ksjVG`)
        .then(response => {
            const pod = response.data;
            console.log('NASA Photo of the Day', pod);
            setPod([pod]);
        })
        .catch(error => {
            console.log('Photo of the Day was not returned', error);
        })
    },[]);

    return (
        <div className='pod'>
            {pod.map(photo => {
                return (
                    <PODCard
                    key={photo.url}
                    url={photo.url}
                    title={photo.title}
                    explanation={photo.explanation}
                    copyright={photo.copyright}
                    date={photo.date}
                    />
                );
            })}
        </div>
    );
}