import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL, API_KEY } from '../Constants/index'

function Photo () {

    const [ photoURL, setPhotoURL ] = useState('')

    useEffect(() => {
        axios.get(`${BASE_URL}${API_KEY}`)
        .then( res => {
            setPhotoURL(res.data.url)
        })
        .catch( err => {
            console.error(err)
        })
    } ,[])

    return (
        <div>
            <img src={photoURL} height='450' width='250'/>
        </div>
    )
}

export default Photo