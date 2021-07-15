import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Explanation(){
    const [ex, setEx] = useState(null)

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=yHrcEEmqivYemLhaBk4hlo4s3H1JxlHQ1qEfEYsA&date=2012-03-14')
        .then(res => {
            setEx(res.data.explanation)
        })
        .catch(err => (console.log(err)))
    }, [Explanation])

    return (
        <div>
            <h3>Explanation:</h3>
            <p>{ex}</p>
        </div>
    )
//fixing a push
}