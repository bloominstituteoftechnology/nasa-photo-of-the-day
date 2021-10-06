import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function TitleSect() {

    const [title, setTitle] = useState('')

    useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=HKUeanWcdsWmMYxY9wIVsADkfGzLf27gDx1af8J9')
      .then(response => {
        setTitle(response.data.title)
      })
      .catch(error => {
          console.error(error);
      })
    })
  
    return (
      <div className="TitleContainer">
        <h1>{title}</h1>
      </div>
    );
}