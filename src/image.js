import React, { useState, useEffect } from 'react'
import { BASE_URL, API_KEY } from './data'
import axios from 'axios'


export default function Image(props) {
    const [todaysImage, setTodaysImage] = useState([])
    
    useEffect(() => {
        axios.get(`${BASE_URL}/apod?api_key=${API_KEY}`)
        .then(res => {
            setTodaysImage(res.data.url)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])


    return (
        <div className='containerImage'>
            <img src='../logo192.png' />
            <h1>NASA's Daily Image</h1>
            <img src={todaysImage} />
        </div>
    )


}