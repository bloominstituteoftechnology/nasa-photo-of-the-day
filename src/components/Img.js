import axios from "axios"
import React, { useEffect, useState } from "react";
import ImageElement from "./ImgEle.js"
import TitleElement from "./TitleEle.js"
import DateElement from "./DateEle.js"
import ExplanationElement from "./ExplanationEle.js"
function CardContent(){
    const [nasa, setNasa] = useState([]);
    useEffect(() => {
    
    
    axios.get('https://api.nasa.gov/planetary/apod?api_key=jU19oRtfGff1OXy8pf7RtLVard1OA2aXAOCiugjZ')
    .then(returning => {      
      const photo = returning.data
      setNasa(photo)
      console.log(returning)
      const title = returning.data
      setNasa(title)
      const date = returning.data
      setNasa(date)
      const explanation = returning.data
      setNasa(explanation)
      })
      .catch(error => {
        console.log("Down", error)
      })
    
    },[])
    return (
      <div>
        <h1>My Photo Of The Day App</h1>
        <TitleElement headline={nasa.title}/>
        <DateElement date={nasa.date}/>
        <ImageElement url={nasa.url}/>
        <ExplanationElement info={nasa.explanation}/>
        
      </div>
    )
    }

    export default CardContent