import React, { useState, useEffect } from 'react';
import DailyTitle from './components/DailyTitle';
import DailyDate from './components/DailyDate';
import DailyImage from './components/DailyImage';
import Explanation from './components/Explanation';
import Copyright from './components/Copyright'; 
//import uuid from 'uuid/v4';
import "./App.css";
import axios from 'axios'

const App = () => {
  
  const [nasaData, setNasaData] = useState([])
  
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=ENZTgJIq8AXtU0ZhK6MU6UZU59ZhUcExUDtZivCZ
    `).then(response => {
      const nasaDataResponse = response.data;
      console.log(nasaDataResponse);
      setNasaData(nasaDataResponse)
    }).catch(error => {
      console.log('The data was not returned', error);
    });
        return () => {
      console.log('cleanup work in useEffect')
    }
 }, [])
  return (
    
    <div className="App">
     <DailyTitle titleData={nasaData.title}/>
     <DailyDate dateData={nasaData.date}/>
     <DailyImage imageData={nasaData.hdurl}/>
     <Explanation explanationData={nasaData.explanation}/>
     <Copyright copyrightData={nasaData.copyright}/>

    </div>
  );
}

export default App;


