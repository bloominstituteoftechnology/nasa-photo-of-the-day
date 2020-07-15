import React, { useState, useEffect } from "react";
import axios from "axios"
import "./App.css";
import { BASE_URL, API_KEY } from "./constants/index"
import Photoheader from "./components/Photoheader";
import Header from "./components/Header";
import Info from "./components/Info";

function App() {
  const [photoData, setPhotoData] = useState('')

  useEffect(() => {
    axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
    .then(res =>{
      console.log(res.data)
      setPhotoData(res.data)
    })
    .catch(err =>{
      console.log('error')
    })
  }, [])

  return (
    <div className="App">
      <Header />
      <Photoheader photoUrl = {photoData.url} />
      <Info dateInfo= {photoData.date} />
    </div>
  );
}

export default App;
