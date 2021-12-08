import React, { useState, useEffect } from 'react'
import { BASE_URL, API_KEY } from './data'
import axios from 'axios'

export default function About (props) {
    const [title, setTitle] = useState([])
    const [about, setAbout] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}/apod?api_key=${API_KEY}`)
        .then(res => {
            setTitle(res.data.title)
            setAbout(res.data.explanation)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div className='about'>
            <h2 className='title'>{ title }</h2>
            <p className='aboutSection'>{ about }</p>
        </div>
    )
}