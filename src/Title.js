import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Title(){
    const [title, setTitle] = useState(null)

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=yHrcEEmqivYemLhaBk4hlo4s3H1JxlHQ1qEfEYsA&date=2012-03-14')
        .then(res => {
            setTitle(res.data.title)
        })
        .catch(err => (console.log(err)))
    }, [Title])

    return (
        <div>
            <h1>{title}</h1>
        </div>
    )

}