import React, { useState, useEffect } from 'react';
import "./App.css";
import axios from 'axios'
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'

import { BASE_URL, API_KEY } from './Constants/index'

function App() {
const [nasaData, setNasaData]=useState(null)

useEffect(() => {
  axios
  .get(`${BASE_URL}?api_key=${API_KEY}`)
  .then((res) =>{
    console.log(res.data)
    setNasaData(res.data)
  })
  .catch((err) =>{
    debugger
  })
}, [])
if(nasaData){

  return (
    <div className="App">

        <Header nasaData={nasaData}/>
        <Body nasaData={nasaData}/>
        <Footer nasaData={nasaData} />
      
    </div>
  );
}
return <div>Loading...</div>
}
export default App;
