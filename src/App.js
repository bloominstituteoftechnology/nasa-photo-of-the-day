import React, { useState, useEffect } from "react";
import axios from 'axios'
import Details from './components/Details/details'
import Gallery from './components/Gallery/gallery'
import Header from './components/Header/header'
import { API_KEY } from './constants/apiData'
import "./App.css";

function App() {
  
  const [data, setData] = useState([])
  
  useEffect(()=>{
    axios
      .get(`https://api.nasa.gov/planetary/apod?${API_KEY}&date=2020-12-08`)
      .then(res => {
        setData(res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  
  return (
    <div className="App">
      <Header headerData={data}/>
      <Gallery imgData={data}/>
      <Details info={data}/>
    </div>
  );
}

export default App;


// https://api.nasa.gov/planetary/apod?api_key=7gZUnOD2CtzZvmHrbEUxLiinLRXyJdQSnHLsU9tz
