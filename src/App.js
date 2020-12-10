import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BASE_URL, API_KEY, DATE } from "../src/constants/index";
import Header from "./components/header";



function App() {
  const [picture, setPicture] = useState([]);
  const header = useState();
  
  useEffect(() => {
    const fetchData = () =>{
    axios
    .get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}&date=${DATE}`)
    .then((res) => {
      setPicture(res.data.hdurl);
      // console.log(res.data.hdurl)
    })
    .catch((err) => {
      console.log(err);
    });
    };
    fetchData();
  }, []);

  
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Header header = {header}/>
      <img src={picture} alt="picture of the day"/>
    </div>
  );
}

export default App;
