import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NasaPhoto () {

    const API_KEY = "qXYnhDSG0waj3uWYCmaxNAhsF5ghT3Wf7o1fHiby";

    const [nasaPic, setNasaPic] = useState("");

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
         .then(res => {
             console.log(res.data.url);
             setNasaPic(res.data.url);
         }).catch(err => {
             console.error(err);
         })
    }, []);

    return (
        <img src = {nasaPic}/>
    )


}

export default NasaPhoto;