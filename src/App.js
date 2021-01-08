import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import dummyData from './dummydata.js'
import Title from "./components/Title"
// import Date from "./components/Date"
import Image from "./components/Image"
import Copyright from "./components/Copyright"
import Explanation from "./components/Explanation"
import { Alert, Button } from 'reactstrap'
import styled from 'styled-components'



function App() {

  const [data, setData] = useState({})
  
  
 
  useEffect (() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
     .then(response => {
       setData(response.data)
     })
     .catch(err => console.log(err))
  }, [])


  const {copyright, date, explanation, hdurl, title, url} = data;
  
 

  return (
    <Body className="App"> 
      
    <h1 style={{marginBottom: "3rem"}}>NASA's Astronomy Picture of the Day for: {date}</h1>
    <Title title = {title} />
    <Copyright copyright = {copyright} />
    {/* <Date date = {date} /> */}
    <Image imageURL = {url} />
    <Explanation explanation = {explanation} />
    

    </Body>
  );
}

const Body = styled.div`
  background-color: black;
  color: white;
`


export default App;
