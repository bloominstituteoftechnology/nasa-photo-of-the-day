import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Photo () {
    const [photo, setPhoto] = useState()
}

useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
        setPhoto(res.data.url)
    })
})