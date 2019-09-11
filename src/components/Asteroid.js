import React, { useState, useEffect } from 'react';
import AsteroidCard from './AsteroidCard';
import axios from 'axios';

export default function Asteroid() {
    const [Asteroids, setAsteroid] = useState([]);


useEffect(() => {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(response  => {
        console.log(response);
        const object = response.data;
        setAsteroid(object);
        console.log(object);
    })
    .catch(error => {
        console.log("No data received", error);
    })
}, []);
    return(
        <div className="container">
            <div className="entry">{
             <AsteroidCard
                hdurl={Asteroids.hdurl}
                title={Asteroids.title}
                explanation={Asteroids.explanation}
                />
            }</div>
        </div>
    )
}