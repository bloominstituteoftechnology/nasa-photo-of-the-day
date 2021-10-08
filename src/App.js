import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios'
import Img from './img'
import Explain from './Explain'
import Extra from './Extra'
import styled from 'styled-components';


const StyleBack = styled.div`
background-color: #e0afa0;
display: flex

justify-content: center;
padding-left: 100px;
padding-right: 100px;

h1{
  background-color: #bcb8b1;
  padding-left: 12.5rem
}

`
const StlyeHead = styled.h1`
font-size: 3.75rem


`

function App() {
  
  const [nasa, setNasa] = useState([])
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=9AbzILPniiieYHA8MPMNrbmTk5y1jqh9t0svIYkq`)
    .then(res => {
      setNasa(res.data)
    })
    .catch(error => {
      console.error(error)
    })
  },[])
  console.log(nasa)
  return (
     <StyleBack>
      <StlyeHead>Nasa image of the day</StlyeHead>
       <Extra nasaExtra = {nasa}/>
       <Img nasaImg = {nasa}/>
       <Explain nasaInfo = {nasa}/>
     </StyleBack>
     
  );
}

export default App;
