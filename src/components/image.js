import React, { useState } from 'react'
import { BASE_URL, API_KEY, DATE_DATA } from './data'
import axios from 'axios'

import About from './about'
import Footer from './footer'


export default function Image(props) {
    // const { chooseDate, getDate } = props;

    const [todaysImage, setTodaysImage] = useState([])
    const [chooseDate, setChooseDate] = useState('')
    const [todaysVideo, setTodaysVideo] = useState('')
    

    const getDate = event => {
        const { value } = event.target;
        setChooseDate(value);
    }
    
    

        axios.get(`${BASE_URL}/apod?api_key=${API_KEY}${DATE_DATA}${chooseDate}`)
        .then(res => {
            if ( res.data.media_type === 'image') {
                setTodaysImage(res.data.url)
            } else {
                setTodaysVideo(res.data.url)
            }
            
        })
        .catch(err => {
            console.log(err)
        })



    return (
        <div className='containerImage'>
            <div>
            <h1>NASA's Daily Image</h1>
            <p>Select Date: <input type='date' id='dateBox' onChange={getDate} /> </p>  
            </div>
            <div>
            <img src={todaysImage} alt={`NASA's Daily Image Not Working`} />
            
            {/* <iframe width='800' height='600' src={todaysImage} /> */}

            </div>
           
            <About chooseDate={chooseDate}  />
            <Footer chooseDate={chooseDate}  />
        </div>
    )


}