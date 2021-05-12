import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import Header from "./components/Header/header"

  


function App() {
 
const [nasaData, setNasaData]  = useState([]);
const [imgText, setImgText] = useState(" ")
const [imgTitle, setImgTitle] = useState(" ");



const getImg = () => {
axios
  .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  .then(function (response) {
     console.log(response.data.explanation);
    setImgTitle(response.data.title);
    setNasaData(response.data.hdurl);
    setImgText(response.data.explanation);
  })
  .then(function (res) {
    setImgText(res.data.explanation);
  })
  .catch(function (error) {
    console.log(error);
  })
  
}


 const NasaImg = props => (
   <div> 
     {props.data.explanation}
   </div>
 ) 

  return (
    <div className="App">
      <Header />
      <button onClick={getImg}>Click here to see todays photo from Nasa</button>
      <img src={nasaData}/>
      <p>{imgText}</p>
    </div>
  );
}

export default App;
