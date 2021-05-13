import React, { useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Title from './Components/Title'

function App() {

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=8DzApwJb2t9VBex2dKLyY7FqiPVYR8ImjjanFyVy")
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  },[])


  return (
    <div className="App">
      <Title />
    </div>
  );
}

export default App;
