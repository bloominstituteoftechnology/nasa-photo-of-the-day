import React, { useEffect, useState } from "react"
import axios from "axios"

export default function NasaPhoto (){
const [photo, setPhoto] = useState([])
const [date, setDate] = useState([])
const [explanation, setExplanation] = useState ([]);
const [title, setTitle] = useState ([]);
const [url, setUrl] = useState ([]);
      useEffect (() =>{
          axios.get("https://api.nasa.gov/planetary/apod?api_key=HNLQulJo3avR2EshFeCHGKZyeXLr46GGjQbG9sLr&date=2020-07-15")
          .then(response => {
                setTitle(response.data.title)
                setPhoto(response.data.url)
                setExplanation(response.data.explanation)
                setDate(response.data.date)
                setUrl(response.data.url)
          })
          .catch(error => console.log('error',error))
      },[])


  return (
    <div className ="nasa-info">

          <h1>NASA Photo of the Day</h1>
          <h2> Title: {title} </h2>
          <h3> Capture date: {date}</h3>
          <img src= {photo} alt= "nasa photo"/>
          <h3>What is it?:</h3>
          <p> {explanation} </p>

        </div>
    )



  } 