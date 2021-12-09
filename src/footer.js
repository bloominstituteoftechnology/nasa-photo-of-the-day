import React, { useState } from 'react'
import { BASE_URL, API_KEY, DATE_DATA  } from './data'
import axios from 'axios'


export default function Footer(props) {
    const { chooseDate } = props;
    const [copyright, setCopyright] = useState([])
    

        axios.get(`${BASE_URL}/apod?api_key=${API_KEY}${DATE_DATA}${chooseDate}`)
        .then(res => {
            setCopyright(res.data.copyright)
        })
        .catch(err => {
            console.log(err)
        })



    return (
        <div className='containerImage'>
            <p>Copyright { copyright }</p>
            {/* <img src='../logo512.png' /> */}
            
        </div>
    )


}