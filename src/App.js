import React, { useState, useEffect }  from "react";
import axios from 'axios';
import Photo from './Photo'
import "./App.css";
import styled, { keyframes } from 'styled-components';

  //1oJrF13Q1tIu0fHn4XyN8p8cl5YxouQkmmiqTgXn&date=2012-03-14
  

function App() {

  const [apod, setApod]=useState([]);
  const [imgMars, setMars]=useState([]);

useEffect(()=>{
  axios.get('https://api.nasa.gov/planetary/apod?api_key=1oJrF13Q1tIu0fHn4XyN8p8cl5YxouQkmmiqTgXn&date=2020-07-16')
  .then((r)=>{
    console.log(r);

    setApod([r.data.url,r.data.explanation]);
  })
  .catch(()=>{
    console.log("errorr")

  })
},[])

  useEffect(()=>{
    axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=1oJrF13Q1tIu0fHn4XyN8p8cl5YxouQkmmiqTgXn')
    .then((r)=>{
      console.log(r);
      setMars(r.data.photos);
    })
    .catch(()=>{
      console.log("errorr")})
    },[])

console.log(apod)
console.log(imgMars)





const StyledDetails = styled.div`

background-color: lightblue;

h1 {color: red;
  font-size: 3.2em;
  &:hover {
    color: #4d79ff;
    transform: translate(10px, 10px) rotate(360deg);
    font-size: 4em;
    transition: all 2s ease-in-out;
  }
}

p {
  width: 80%;
  text-align: center;
  color: green;
  font-size: 1.2em;
  padding-left: 10%;
  &:hover {
    color: #000d33;
  }
}


.contMars {
 
  &:hover {
    background-color: #ff704d;
   
  }
}

imgMars {
  &:hover {
    transform: translate(200px, 150px) rotate(20deg)
  }

}



`

  return (
    <StyledDetails id='detailsView' className ='container'>
    <div className="App">
      <h1>
      NASA Astronomy Picture of the Day
      </h1>
      <img src={apod[0]} alt="space"/>
  <p>{apod[1]}</p>
        <div className='contMars'>
        {imgMars.map(i =>
  <Photo imgMars = {i.img_src}/>
)}
      </div>
    </div>
    
    </StyledDetails>
    



  );
}



export default App;
