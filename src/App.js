import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Header from './Header'
import Card from './Card'
import Footer from './Footer'
import styled from 'styled-components'

const AppStyle = styled.div



export default function App() {
  const [data, setData]  = useState([])
  useEffect(()=>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(res=>{
      setData(res.data)
      console.log(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  },[])
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
        <AppStyle>
          <Header/>
          <Card photo={data} content={data} title={data}/>
          <Footer/>
        </AppStyle>          
      </p>
    </div>
  );
}

