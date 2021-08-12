import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { BASE_URL, API_KEY } from '../src/constants/index'
import "./ApodDisplay.css"


export default function Apod() {
   
    const [now, setNow] = useState({})

    useEffect(() => {
        axios.get(`${BASE_URL}?api_key=${API_KEY}`)
        .then(res => {
            setNow(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [])
   
    return (
    

       <div className='apod-container'>
           <div className='description-container'>
               <h3>{now.date}</h3>
               <h2>{now.title}</h2>
               <p className="description">{now.explanation}</p>
               <p>Copyright: {now.copyright}</p>
            </div>
            <div className='image-container'>
                <img src={now.url}></img>
            </div>    
       </div>
   ) 
}