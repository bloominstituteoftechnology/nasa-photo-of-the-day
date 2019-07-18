import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Header from "./Components/Header";
import Title from "./Components/display/Title";
import Photo from "./Components/Photo";
import DateInput from "./Components/Dateinput";
import Date from "./Components/display/Date";
import ImgCard from "./Components/ImgCard.js";


function App() {
  const[photo,setPhoto] = useState();
  const[title,setTitle] = useState();
  const[info,setInfo] = useState();
  const[date,setDate] = useState();

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=KUOAg1cDgYGFfTzQQORs9TV0U7ybbx9xyo6Fha4S`)
      .then( response => {
        const dailyImg = response.data.url;
        console.log("image url: ",dailyImg);
        setPhoto(dailyImg);
        const imgTitle = response.data.title;
        setTitle(imgTitle);
        const imgInfo = response.data.explanation;
        setInfo(imgInfo);
        const imgDate = response.data.date;
        setDate(imgDate);
      })
      .catch(error => {
        console.log('The API is currently down, try again later', error)
      })
    },[])


  
  
  
  
  
  
 
  
  return (
    <div className="todays-pick">
    <Header date = {date} />
      <ImgCard imgURL ={photo} imgTitle = {title} explanation = {info}/>
    </div>
    
  );
}

export default App;
