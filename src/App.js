import React, { useState, useEffect }  from "react";
import axios from 'axios';
import Photo from './Photo'
import "./App.css";


  //1oJrF13Q1tIu0fHn4XyN8p8cl5YxouQkmmiqTgXn&date=2012-03-14
  

function App() {
  const [apod, setAp]=useState();
  const [imgMars, setMars]=useState([]);
useEffect(()=>{
  axios.get('https://api.nasa.gov/planetary/apod?api_key=1oJrF13Q1tIu0fHn4XyN8p8cl5YxouQkmmiqTgXn&date=2020-07-15')
  .then((r)=>{
    console.log(r);
    setAp(r.data.url);
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
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <img src={apod} alt="space"/>
      <p>Comet NEOWISE has been wowing photographers around much of the world during dawn and dusk, at the margins of day and night.  For the most northern residents of planet Earth, however, the comet circles the North Star and never sets. 
        The night part of this circular arc is apparent in the featured composite of images assembled from a webcam located at a ski resort in the Swiss Alps.  Images were selected at 30-minute intervals throughout the night from July 12th -13th. 
        Comet NEOWISE (C/2020 F3) will continue to become more accessible to northern hemisphere observers as its motion places it higher in the sky each evening after sunset over the next few weeks, as it begins its outbound journey.  As with all comets, departure from the inner Solar System comes with inevitable fading.  
        Binoculars are the best way to find and observe the comet visually.</p>
        <div className='contMars'>
        {imgMars.map(i =>
  <Photo imgMars = {i.img_src}/>
)}
      </div>
    </div>
    

    



  );
}

export default App;
