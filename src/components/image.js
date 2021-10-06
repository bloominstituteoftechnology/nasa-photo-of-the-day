import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function ImageSect() {

    const [image, setImage] = useState('')

    useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=HKUeanWcdsWmMYxY9wIVsADkfGzLf27gDx1af8J9')
      .then(response => {
        setImage(response.data.url)
      })
      .catch(error => {
          console.error(error);
      })
    })
  
    return (
      <div className="ImageContainer">
        <img src = {image} alt = '*insert image here'></img>
      </div>
    );
}