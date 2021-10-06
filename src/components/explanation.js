import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function ExplanationSect() {

    const [explanation, setExplanation] = useState('')

    useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=HKUeanWcdsWmMYxY9wIVsADkfGzLf27gDx1af8J9')
      .then(response => {
        setExplanation(response.data.explanation)
      })
      .catch(error => {
          console.error(error);
      })
    })
  
    return (
      <div className="ExplanationContainer">
        <p>{explanation}</p>
      </div>
    );
}