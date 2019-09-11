import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PODCard from './PODCard';





export default function POD() {

    const [pod, setPod] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(response => {
            const pod = response;
            console.log('NASA Photo of the Day', pod);
            setPod(pod);
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
                    title={photo.title}
                    description={photo.explanation}
                    copyright={photo.copyright}
                    date={photo.date}
                    />
                );
            })}
        </div>
    );
}