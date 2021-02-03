import React, { useState, useEffect } from 'react'
import axios from 'axios'

function BodyComponent () {
    const [nasaData, setNasaData] = useState ([]);
    const [year, setYear] = useState(2021)
    const [month, setMonth] = useState (2)
    const [day, setDay] = useState (2)


    const handleChange1 = e => {
        setYear(e.target.value)
    };

    const handleChange2 = e => {
        setMonth(e.target.value)
    }

    const handleChange3 = e => {
        setDay(e.target.value)
    }

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=CcmGBnkxQhivVPDmnl999hJsnKeKXavVqHad5mtJ&date=${year}-${month}-${day}`)
        .then(res => {
            console.log(res.data);
            setNasaData(res.data)
        })
        .catch(err => console.log(err))
    }, [year, month, day])

    return (
    <>
       <div>
           <h1>{nasaData.date}</h1>
           <img src = {nasaData.url}/>
           <p>Description: {nasaData.explanation}</p>
           <p>What Photo of the Day would you like to see from NASA?</p>

           <div>
               YEAR:
               <input
                type="text"
                placeholder="YEAR"
                value={year}
                onChange={handleChange1}
               />
                MONTH:
               <input
                type="text"
                placeholder="MONTH"
                value={month}
                onChange={handleChange2}
               />
                DAY:
               <input
                type="text"
                placeholder="DAY"
                value={day}
                onChange={handleChange3}
               />
           </div>
       </div>
    </> 
    )
}

export default BodyComponent;