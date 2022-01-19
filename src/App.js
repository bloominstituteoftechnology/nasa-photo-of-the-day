import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Header from "./header";

function App() {
const [photoOfTheDay, setPhoto] = useState([])

useEffect(() => {
  const getPhoto = () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=cE5KTLhSAfLJAkBh1kW9Uo748DteCGEStGfvJSmU')
    .then(resp => {
      console.log(resp.data)
      setPhoto(resp.data)
    })
    .catch(err => {
      console.error(err)
    })
  }
  getPhoto()
}, [])



  return (
    <div className="App">
     <Header photo={photoOfTheDay} />
    </div>
  );
}

export default App;
