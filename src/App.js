import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import dummyData from './dummydata.js'
import Title from "./components/Title"
// import Date from "./components/Date"
import Image from "./components/Image"
import Copyright from "./components/Copyright"
import Explanation from "./components/Explanation"



function App() {

  const [data, setData] = useState({})
  
  
  // !!!!! I RAN OUT OF REQUESTS WHILE DOING THE PROJECT!
  // !!!!! I WILL FIX THIS AND POST THE REQUEST WHEN IM ABLE TO REQUEST AGAIN!
  useEffect (() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
     .then(response => {
       setData(response.data)
     })
     .catch(err => console.log(err))
  }, [])

  console.log(data, "HERE")
  const {copyright, date, explanation, hdurl, title, url} = data;
  
 

  return (
    <div className="App">
      <h1>Welcome to NASA's Astronomy Picture of the Day for: {date}</h1>
    <Title title = {title} />
    {/* <Date date = {date} /> */}
    <Image imageURL = {url} />
    <Explanation explanation = {explanation} />
    <Copyright copyright = {copyright} />
    </div>
  );
}

export default App;
