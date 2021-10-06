import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Media(){
    const [media, setMedia] = useState(null)

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=QJvQ8epqTuHyftbwtNI2zWGIYkhTewyNThhIADJ5')
        .then(res => {
            setMedia(res.data.url)
        })
        .catch(err => (console.log(err)))
    }, [Media])

    return (
            <div>
            <img src = {media} ></img>
            </div>
    )
}