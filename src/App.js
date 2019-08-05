import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import ImgCard from "./components/ImgCard";
import { Button } from "./components/StyledWidgets.js";
import LoaderExampleIndeterminate from "./components/Loader";





function App() {
  // create state variables
  const[photo,setPhoto] = useState();
  const[title,setTitle] = useState();
  const[info,setInfo] = useState();
  const[date,setDate] = useState();
  const staticInfo = "";



  useEffect(() => {
    axios
      // call NASA API
      .get(`https://api.nasa.gov/planetary/apod?api_key=wQe8tiUEu5Y5nDLpRryKo8aelQSCQOdYarI7uNoC`)
      .then( response => {
        // set states for each variable
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
      // set error message
      .catch(error => {
        console.log('The API is currently down, try again later', error)
      })
    },[])



  return (
    <div className="App">
      <Header date = {date} />
      <ImgCard imgURL ={photo} imgTitle = {title} explanation = {info} />
    </div>

  );
}

export default App; 
