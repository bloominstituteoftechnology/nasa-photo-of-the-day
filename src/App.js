import React, { useState, useEffect } from "react";
import axios from 'axios';
import Footer from './components/Footer';
import Image from './components/Image';
import Header from './components/Header';
import "./App.css";

function App() {
  const [nasaPhoto, setNasaPhoto] = useState([])

  useEffect(() =>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=1D1cPFJ0V1f1n57x1rcKBU2lH66n9CZIg52J9yoD&date=2020-12-08')
    .then((res) =>{
      console.log(res.data);
      setNasaPhoto(res.data)
    })
  }, [])

  if (!nasaPhoto) return <h3>Loading...</h3>;


  return (
    <div className="App">
      <Header />
      <Image title={nasaPhoto.title} photo={nasaPhoto.url} date={nasaPhoto.date} details={nasaPhoto.explanation} />
      <Footer copyright={nasaPhoto.copyright}/>
    </div>
    
  );
  
}

export default App;
