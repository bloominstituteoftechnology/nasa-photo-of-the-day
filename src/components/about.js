import React, { useState } from 'react'
import { BASE_URL, API_KEY, DATE_DATA } from './data'
import axios from 'axios'

export default function About (props) {
    const { chooseDate } = props;
    const [title, setTitle] = useState([])
    const [about, setAbout] = useState([])



        axios.get(`${BASE_URL}/apod?api_key=${API_KEY}${DATE_DATA}${chooseDate}`)
        .then(res => {
            setTitle(res.data.title)
            setAbout(res.data.explanation)
        })
        .catch(err => {
            console.log(err)
        })
 

    return (
        <div className='about'>
            <h2 className='title'>{ title }</h2>
            <p className='aboutSection'>{ about }</p>
        </div>
    )
}