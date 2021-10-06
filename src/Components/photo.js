import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL, API_KEY } from '../Constants/index'

function Photo () {

    const [ photoURL, setPhotoURL ] = useState('')
    const [ photoDescription, setPhotoDescription ] = useState('')

    useEffect(() => {
        axios.get(`${BASE_URL}${API_KEY}`)
        .then( res => {
            setPhotoURL(res.data.url)
            setPhotoDescription(res.data.explanation)
        })
        .catch( err => {
            console.error(err)
        })
    } ,[])

    return (
        <div>
            <center>
            <img src={photoURL} />
            <p>{photoDescription}</p>
            </center>
        </div>
    )
}

export default Photo