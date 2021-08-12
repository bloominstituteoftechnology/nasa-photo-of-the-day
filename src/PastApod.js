import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { BASE_URL, API_KEY } from '../src/constants/index'
import "./ApodDisplay.css"


export default function PastApod(props) {
   const { date } = props
   const[newApod, setNewApod] = useState('')

    useEffect(() => {
        axios.get(`${BASE_URL}?api_key=${API_KEY}&date=${date}`)
        .then(res => {
            console.log('data', res.data)
            setNewApod(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [date])
   
    return (
    

       <div className='apod-container'>
           <div className='description-container'>
               <h3>Date: {newApod.date}</h3>
               <h2>Title: {newApod.title}</h2>
               <p>Description: {newApod.explanation}</p>
               <p>copyright:{newApod.copyright}</p>
            </div>
            <div className='image-container'>
                <img src={newApod.url} alt='Apod'></img>
            </div>    
       </div>
   ) 
}