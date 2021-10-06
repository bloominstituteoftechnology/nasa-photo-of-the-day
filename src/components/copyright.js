import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function CopyrightSect() {

    const [copyright, setCopyright] = useState('')

    useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=HKUeanWcdsWmMYxY9wIVsADkfGzLf27gDx1af8J9')
      .then(response => {
        setCopyright(response.data.copyright)
      })
      .catch(error => {
          console.error(error);
      })
    })
  
    return (
      <div className="CopyrightContainer">
        <h3>{copyright}</h3>
      </div>
    );
}