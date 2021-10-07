import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NasaPhoto () {

    const API_KEY = "qXYnhDSG0waj3uWYCmaxNAhsF5ghT3Wf7o1fHiby";

    const [nasaPic, setNasaPic] = useState("");

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
         .then(res => {
             console.log(res.data.url);
             setNasaPic(res.data.url);
         })
    }, [])


}

export default NasaPhoto