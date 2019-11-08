import React, {useState, useEffect} from "react"

import axios from "axios"
import styled from "styled-components"


const EclipseButton= styled.a`
width: 350px;
heigth: 100px;
border-radius: 10px;
border-color: orange;
background-color: gray;
color: yellow;
font-size: 4rem;

`;

const MySpace = styled.img`

    width: 560px;
    heigth: 500px;
    border:solid 30px;
    border-bottom-color:#ffe;
    border-left-color:#eed;
    border-right-color:#eed;
    border-top-color:#ccb;

`;

const WhyExplain= styled.p`
    width: 550px;
    
    padding-bottom: 7%;

`;

export default function SpaceImg(){

const [data, setData] = useState ({})

const outLink = () => this.setState({src:"https://apod.nasa.gov/apod/ap150913.html"})

useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=QDP6d6DdkSHE1C6A7ighhHxR7R6VenweLxWlRde5")
    .then(response => {
        console.log(response);
        setData(response.data)
    })
    .catch( error => {
        console.log("sorry no space images today", error);
    })
},[])

return (
    <div className= "App">
      <EclipseButton href="https://apod.nasa.gov/apod/ap150913.html">Eclipse!</EclipseButton>
      <h1>{data.title}</h1>
        <MySpace  className="space-image" alt="random img" src={data.hdurl}/>
        <h2>Image Date: {data.date}</h2>
        <WhyExplain>{data.explanation}</WhyExplain>
 
    </div>
    )
}