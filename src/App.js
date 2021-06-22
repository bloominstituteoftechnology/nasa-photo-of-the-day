import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import Header from './header'
import Body from './body'

function App() {
  const [photo, setPhoto] = useState()
  const [date, setDate] = useState()
  const [title, setTitle] = useState()
  const [info, setinfo] = useState()
 


  // the API call
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(info => {
      setDate(info.data.date);
      setinfo(info.data.explanation);
      setPhoto(info.data.url); 
      setTitle(info.data.title);
      

      console.log('here is the info', info.data)
    })
}, [])





  return (
    <div className="App">
      <Header title={title} date={date} />
      <Body photo={photo}
        info={info} />
    </div>
  );
}

export default App;
