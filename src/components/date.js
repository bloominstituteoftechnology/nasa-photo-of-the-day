import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function DateSect() {

    const [date, setDate] = useState('')

    useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=HKUeanWcdsWmMYxY9wIVsADkfGzLf27gDx1af8J9')
      .then(response => {
        setDate(response.data.date)
      })
      .catch(error => {
          console.error(error);
      })
    })
  
    return (
      <div className="DateContainer">
        <h2>{date}</h2>
      </div>
    );
}