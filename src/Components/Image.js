import React, {useState, useEffect} from "react";
import axios from 'axios'


import {BASE_URL, API_KEY} from '../Components/Links'






 function Images(props) {
    const [nasaimage, setnasaimage] = useState('')
    const [nasadate, setnasadate] = useState()
    console.log(props.data)
    useEffect(() => {
        axios.get(`${BASE_URL}/planetary/apod?date=${props.data}&api_key=${API_KEY}`)
          .then(res => {
            setnasaimage(res.data.url)
            
          })
       
          .catch(err => {
            console.log(err)
          })
          .finally(() => {
            // this runs whether success or failure
          })
        },[props.data])
        useEffect(() => {
            axios.get(`${BASE_URL}/planetary/apod?date=${props.data}&api_key=${API_KEY}`)
             
              .then(res => {
                setnasadate(res.data.date)
              })
              .catch(err => {
                console.log(err)
              })
              .finally(() => {
                // this runs whether success or failure
              })
            },[props.data])
    






    return (
        <div className ="image">
            <p>{nasadate}</p>
            <img src= {nasaimage} alt='logo'></img>
        </div>
        
    )



}
export default Images;
