import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios'
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"
function App() {
  const [imageOfToday, setImageOfToday] = useState([]);
  useEffect(() =>{

  axios.get (`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14`)
       .then(res =>{
         setImageOfToday(res.data)
         console.log(res)
        })
       .catch(err => console.log('error'))

  },[])






  return (
    <div className="App">
      <Header title = {imageOfToday.title} />
      <Body image = {imageOfToday.url} info = {imageOfToday.explanation}/>
      <Footer footer = {imageOfToday.copyright}/>

    </div>
  );
}

export default App;
