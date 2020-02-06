import React, { useState, useEffect } from 'react';
import axios from 'axios'

import Calendar from './calendar';
import Photo from './photo';

export const Apod = () => {

    const [ data, setData ] = useState()

    const fetchData = (date="") => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=spKBP8PFum2CMgJT4yaFGza6lW8uJydNBKyk09jr${date}`)
            .then(res => {
              setData(res.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(fetchData, [])

    const fetchDataWithDate = (date)  => {
        const dateQuery = `&date=${date}`
        fetchData(dateQuery)
    }
    console.log(data)
    return (
        <div className="apod-container">
            {data ? <Photo {...data} />  : <p>loading...</p>}
            <Calendar fetchDataWithDate={fetchDataWithDate} />
        </div>
    )
}

export default Apod;