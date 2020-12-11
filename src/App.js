<<<<<<< HEAD

import "./App.css";
import axios from "axios"
import React, {useEffect,useState} from "react"
import {Image} from "./image"




function App() {
  
  const [nasaData,setNasaData] = useState("")
  

  useEffect(() => {
    
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=leHoEfK9OcSztrGdehxyUGRHuuLHnFxfKypXslXg&date=2012-03-14`)
      .then((res) => {
      
       setNasaData(res.data)
      //  console.log(res.data)
        console.log(setNasaData)
      })
      .catch((err) => {
        // console.log(err);
      });
  

  ;
}, []);

  return (
    <div className="App">
    <h1>
      Hello World
    </h1>
      <Image nasaData = {nasaData} />
      
 
  </div> 
    
  )
=======
import React,{useState,useEffect} from "react";
import "./App.css";
import axios from "axios"


function App() {
  const [nasaData, setNasaData]= useState(result)
  const date = 

  useEffect(() => {
    
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=leHoEfK9OcSztrGdehxyUGRHuuLHnFxfKypXslXg&date=2012-03-14`)
        .then((res) => {
          const result = res.data
          console.log(res)
        })
        .catch((err) => {
          console.log(err);
        });
    

    ;
  }, []);

 
>>>>>>> 32ea522bcc0f783acb3ffbcca9bbc37ceda05f75
}



export default App;
