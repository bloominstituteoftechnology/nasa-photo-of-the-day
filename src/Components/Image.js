import React, {useState, useEffect} from "react";
import axios from 'axios'

import {BASE_URL, API_KEY} from '../Components/Links'






 function Images() {
    const [nasaimage, setnasaimage] = useState()
    const [nasadate, setnasadate] = useState()
    useEffect(() => {
        axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
          .then(res => {
            setnasaimage(res.data.url)
            
          })
       
          .catch(err => {
            console.log(err)
          })
          .finally(() => {
            // this runs whether success or failure
          })
        },[])
        useEffect(() => {
            axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
             
              .then(res => {
                setnasadate(res.data.date)
              })
              .catch(err => {
                console.log(err)
              })
              .finally(() => {
                // this runs whether success or failure
              })
            },[])
    






    return (
        <div className ="image">
            <p>{nasadate}</p>
            <img src={nasaimage} alt='logo'></img>
        </div>
        
    )



}
export default Images;
