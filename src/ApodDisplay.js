import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { BASE_URL, API_KEY } from '../src/constants/index'
import "./ApodDisplay.css"


export default function Apod() {
   
    const [today, setToday] = useState({})

    useEffect(() => {
        axios.get(`${BASE_URL}?api_key=${API_KEY}`)
        .then(res => {
            setToday(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [])
   
    return (
    

       <div className='apod-container'>
           <div className='description-container'>
               <h3>Date: {today.date}</h3>
               <h2>Title: {today.title}</h2>
               <p>Description: {today.explanation}</p>
               <p>copyright:{today.copyright}</p>
            </div>
            <div className='image-container'>
                <img src={today.url}></img>
            </div>    
       </div>
   ) 
}