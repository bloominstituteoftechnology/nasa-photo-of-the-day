import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY} from './constants/constantsIndex';

export default function MainContent(props) {
    const [details, setDetails] = useState([])

useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => {
        console.log(res.data);
        setDetails(res.data)
    }).catch(err => {
        console.log(err);
    })
},[])

return (
    <div className='main-content container'>
        <h5>{details.explanation}</h5>
        <img className='main-image'src={details.url} alt='https://api.nasa.gov/planetary/apod?api_key=Lz5GYCNcSITHrvzhFNWk88bVLBaufh2quaqEyOZy'></img>
        <h3 className='title'>{details.title}</h3>
        <h6 className='copyright'>{details.copyright}</h6>
    </div>
)
}

