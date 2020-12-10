import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import TopBar from './top-bar/topbar'
import MainHeader from './main-header/main-header'
import FeaturedImg from './featured-img/featured-img'

const [imageData, setImageData] = useState([])

function App() {
  
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=krgov0zYymJ4pGF1sVUvTq1L6sDrvLv5DIdd4AD3&date=2020-12-08`)
      .then(res => {
        setImageData(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])
  console.log(imageData);
  return (
    <div className="App">
      <TopBar />
      <MainHeader imageData={imageData} />
      <FeaturedImg imageData = {imageData}/>
    </div>
  );
}

export default App;
