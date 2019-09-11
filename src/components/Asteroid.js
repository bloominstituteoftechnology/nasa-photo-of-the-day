import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Asteroid() {
    const [Asteroids, setAsteroid] = useState([]);


useEffect(() => {
    axios
    .get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY`)
    .then(response  => {
        console.log(response);
        const object = response.data.near_earth_objects;
        setAsteroid(object);
        console.log(object)
    })
    .catch(error => {
        console.log("No data received", error);
    })
}, []);

return (
    <h3> hello world</h3>
    );
}
