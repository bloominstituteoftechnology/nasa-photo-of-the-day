import React  from "react";
import "./App.css";
import axios from 'axios';
import { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";


function App() {
  const [todayPhotos, setTodayPhotos] = useState([]);
  useEffect(() =>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14`)
    .then(res =>{
      setTodayPhotos(res.data)
console.log(res)
    })
    .catch(err => console.log('something went wrong'))
  },[])




  return (
    <div className="App" >
      < Header title = {todayPhotos.title}/>
      <Main image = {todayPhotos.url} info = {todayPhotos.explanation}/>
      <Footer footer = {todayPhotos.copyright}/>
      
    </div>
  );
}

export default App;
