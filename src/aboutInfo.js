import React, { useState, useEffect } from 'react'
import { BASE_URL, api_key } from './nasa'
import axios from 'axios'

export default function AboutInfo(props) {
    
    const [details, setDetails] = useState([])
    const date = details.date
    const title = details.title
    const info = details.explanation
    console.log()
    
    useEffect(() => {
        axios.get(`${BASE_URL}${api_key}&date=2012-03-14`)
        .then(({data}) => setDetails(data))
        .catch(err => console.log('Error getting details: ', err))
      }, [date])

    return (
        <div className='outer-container'>
        <div className='container'>
            <h2 className='pic-title'>{title}</h2>
            <p className='pic-info'>{info}</p>
            <p className='date-info'> - {date}</p>
        </div>
        </div>
    )
        
}
