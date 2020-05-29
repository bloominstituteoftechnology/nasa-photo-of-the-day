import axios from "axios"
import React, { useEffect, useState } from "react";
import ImageElement from "./ImgEle.js"
import TitleElement from "./TitleEle.js"
import DateElement from "./DateEle.js"
import ExplanationElement from "./ExplanationEle.js"
import styled from 'styled-components'
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
    const StyledTitle = styled.h1`
    
    
    
    font-size:20px;
    background-color: white;
    width: 65%;
    margin: 0 auto;
    padding-bottom: 1%;
    border-left: black solid 1px;
    border-right: black solid 1px;
    border-bottom: black solid 1px;
    
    

    `
    return (
      <div>
        <StyledTitle>
        <h1>My Photo Of The Day App</h1>
        <TitleElement headline={nasa.title}/>
        </StyledTitle>
        <DateElement date={nasa.date}/>
        <ImageElement url={nasa.url}/>
        <ExplanationElement info={nasa.explanation}/>
        
      </div>
    )
    }

    export default CardContent