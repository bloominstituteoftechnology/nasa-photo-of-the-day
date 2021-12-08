import React, { useState, useEffect } from 'react'
import { BASE_URL, API_KEY } from './data'
import axios from 'axios'


export default function Footer(props) {
    const [todaysDate, setTodaysDate] = useState([])
    const [copyright, setCopyright] = useState([])
    
    useEffect(() => {
        axios.get(`${BASE_URL}/apod?api_key=${API_KEY}`)
        .then(res => {
            setTodaysDate(res.data.date)
            setCopyright(res.data.copyright)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])


    return (
        <div className='containerImage'>
            <p>{ todaysDate }</p>
            <p>{ copyright }</p>
            
        </div>
    )


}