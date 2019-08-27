import React, { useState, useEffect } from "react";
import axios from "axios";
import Display from "./components/Didsplay/Display"
import "./App.css";



function App() {
  const [data , setDate] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
         .then(res => {
          setDate(res.data.url)
         })
  } , [ ])



  return (
    <div className="App">
     <Display imgSrc={data} />
    </div>
  );
}

export default App;
