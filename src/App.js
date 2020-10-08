import React, {useState, useEffect} from "react";
import axios from 'axios'
import "./App.css";
import "./rover.js"
import {API_KEY} from './keyData'
import styled from 'styled-components'

const StyledApp = styled.div`
  *{
    background-color: black;
    color:white;
  }
  
  h1{
    color:red;
    font-size:3rem;
    margin-top:0%;
    margin-bottom:0%;
  }
  h2{
    margin-top:0%;
    margin-bottom:0%;
  }
  h3{
    margin-top:0%;
    margin-bottom:0%;
  }
  p{
    margin-top:0%;
    width:50%;
    margin-left:25%                          ;
  }
  img{
    margin-top:0%;
    margin-bottom:0%;
    width:50%;
    border:dashed 3px white;
  }
`

function App(){
  const[photo, setPhoto] = useState({})

  useEffect(() =>{
    const fetchImage = () =>{
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(res=>{
        setPhoto(res.data)
      console.log(res.data)
      })
      .catch(err=>{

      })
    }
    fetchImage()
  },[] )


  return (
    <StyledApp className="App">
      <h1>NASA Photo of the Day</h1>
      <h2>{photo.title}</h2>
        <h3>Date</h3>
        <h3>{photo.date}</h3>
        <img src={photo.url}/>
      <p>
        {photo.explanation}
      </p>
      <p>by {photo.copyright}</p>
    </StyledApp>
  );
}

export default App;
