import React, { useState, useEffect } from "react";
import "./App.css";


import Img from './components/img';
import Title from './components/header'
import Text from './components/text'
import axios from "axios";

function App() {
  const baseURL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
  const [nasaData, setNasaData] = useState({})
  // const [data, setData] = useState({})

  useEffect(() => {
    const getData = () => {
      axios.get(baseURL)
      .then(res => {
        console.log(res.data)
        setNasaData(res.data)        
      })
      .catch(err => {
        console.error()
      })
    }
    getData();
  }, []);


  return (
    <div className="App">
      <Title title={nasaData.title}/>
      <Img url={nasaData.url} alt={nasaData.title}/>
      <Text text={nasaData.explanation}/>
      {/* <Text /> */}
      <p>
        
        {/* {title} */}
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      {/* <img src={nasaData} alt="Girl in a jacket"> */}
      {/* <h1>{nasaData}</h1> */}
    </div>
  );
}

export default App;
//started working on the App.js file