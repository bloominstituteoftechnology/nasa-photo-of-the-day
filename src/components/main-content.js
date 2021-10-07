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
        <img className='main-image'src={details.url}></img>
        <p className='title'>{details.title}</p>
        <p className='copyright'>{details.copyright}</p>
    </div>
)
}

