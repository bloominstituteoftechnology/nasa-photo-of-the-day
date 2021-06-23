import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";

export const API_KEY = 'jswv153dCEmtfUmDK7CypxsQ7B2bg7eglsVGzONb';
export const BASE_URL = 'https://api.nasa.gov/planetary/apod?';

function App() {
  

  

  const [data, setData] = useState({});

  useEffect(()=>{
    const getData = () =>{
          axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
          .then(res =>{
           console.log(res)
           setData(res.data)


              })


                  .catch(error =>{
                    console.log(error)


              })

    }
    getData()
  },[])

  return (
    
    <div className="App">
      
     
      
        <p>Nasa photo of the day!</p>
     
      <img src={data.url} alt="space stuff"  />
      
     
      <p>{data.title}</p>
      <p>{data.date}</p>
      <p>{data.explanation}</p>
      
      
      
      
      
    </div>
    
  );
}


export default App;
