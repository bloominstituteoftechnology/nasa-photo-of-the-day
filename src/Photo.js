import React, { useEffect, useState } from "react";

function Photo() {
const [nasa,setNasa] = useState([])
useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        setNasa(res.data)
      })
      .catch(err => {
        debugger
      })
    }, [])
return (
    <div className='Photo'>
        <h2>{nasa.title}</h2>
        {
        nasa &&
         <>
            <img src = {nasa.hdurl} />
            <p>{nasa.explanation}</p>
            <p>Date: {nasa.date}</p>
        </>
        }
        <button onClick={close}>Close</button>
    </div>
    )
}