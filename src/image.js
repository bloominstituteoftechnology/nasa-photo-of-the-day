import React, { useState } from 'react'
import { BASE_URL, API_KEY, DATE_DATA } from './data'
import axios from 'axios'

import About from './about'
import Footer from './footer'


export default function Image(props) {
    // const { chooseDate, getDate } = props;

    const [todaysImage, setTodaysImage] = useState([])
    const [chooseDate, setChooseDate] = useState('')
    

    const getDate = event => {
        const { value } = event.target;
        setChooseDate(value);
    }
    
    

        axios.get(`${BASE_URL}/apod?api_key=${API_KEY}${DATE_DATA}${chooseDate}`)
        .then(res => {
            setTodaysImage(res.data.url)
        })
        .catch(err => {
            console.log(err)
        })




    return (
        <div className='containerImage'>
            <img src='../logo192.png' alt={'NASA logo'}/>
            <h1>NASA's Daily Image</h1>
            <p>Date: <input type='date' id='dateBox' onChange={getDate} /> </p>            
            <img src={todaysImage} alt={`NASA's Daily Image Not Working`} />
           
            <About chooseDate={chooseDate}  />
            <Footer chooseDate={chooseDate}  />
        </div>
    )


}