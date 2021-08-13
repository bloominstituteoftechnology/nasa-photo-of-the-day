import React, { useEffect, useState} from "react";
import "./App.css";
import axios from 'axios';
import  { BASE_URL, API_KEY } from './constants/index';
import Title from './components/Title.js';
import Img from './components/Img.js';
import Explanation from "./components/Explanation";



function App() {
  
  const[nasaData, setNasaData]= useState({});

  useEffect(() =>{
    axios.get(`${BASE_URL}${API_KEY}`)
    .then(res => {
      console.log(res);
      setNasaData(res.data)
    }).catch(err =>{
      console.error()
    })
  }, [])
  
  return (
    <div className="App">
      <Title   title ={nasaData.title}/>
      <Img className="img" img={nasaData.url}/>
      <div className='info-container'> 
        <Explanation version={nasaData["service_version"]} date={nasaData.date} copyright={nasaData.copyright} explanation={nasaData.explanation}/>
     </div>

      
    </div>
  );
}

export default App;

