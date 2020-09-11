import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Card from "./Components/Card";


function App() {
  const [photo, setPhoto]= useState([])

  useEffect(() => {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=GjNb0rJyTAIgAWhma78UqFZdzMGzdtcCNT98FcDC&date=2020-09-09`)
    .then(response => {
      const nasaPicInfo = (response.data)
      console.log(nasaPicInfo)
      setPhoto(response.data)
    })
    .catch(error =>{
      console.log("sorry no image", error)
    })
  },[])


  return (
    <div className="container">
      <Card imgUrl = {photo.url} title = {photo.title} description = {photo.explanation}/>
    </div>
   
  )
}

export default App;
