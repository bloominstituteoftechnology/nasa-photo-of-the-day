import React, {useState, useEffect} from "react";
import axios from 'axios'

import {BASE_URL, API_KEY} from '../Components/Links'






 function ExplanationText() {
    const [extext, setExText] = useState()
    const [title, setTitle] = useState()
    const [author, setAuthor] = useState()
    useEffect(() => {
        axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
          .then(res => {
            setExText(res.data.explanation)
            
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
            setTitle(res.data.title)
            
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
            setAuthor(res.data.copyright)
                
            })
        .catch(err => {
            console.log(err)
            })
        .finally(() => {
            // this runs whether success or failure
            })
            },[])
    






    return (
        <div class ="explain">
            <h2>{title}</h2>
            <h3>Copyright: {author}</h3>
            <p>{extext}</p> 
        </div>
       
    )



}
export default ExplanationText;