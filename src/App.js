import React, { useEffect, useState} from "react";
import "./App.css";
import axios from 'axios'
import Img from './img'
import Explain from './Explain'
import Extra from './Extra'
import styled from 'styled-components';



const StyleBack = styled.div`
background-color: #e0afa0;
display: flex
justify-content center;
padding: 0 10%;
h1{
  background-color: #bcb8b1;
  padding-left: 12.5rem
}
`
const StyleHead = styled.h1`
font-size: 3.75rem
`

function App() {

  const [nasa, setNasa] = useState([])
  useEffect(() =>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=vYasWXhZq0LKf8nf7DK0BDHi7VtXFR&date=2012-03-14`)
    .then(res => {
      setNasa(res.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])
  
  return (
    <StyleBack>
      <StyleHead>Nasa Image of The Day</StyleHead>
       <Extra nasaExtra = {nasa}/>
       <Explain nasaInfo = {nasa}/>
       <Img nasaImg = {nasa}/>
     </StyleBack>

  );
}

export default App;


//slight