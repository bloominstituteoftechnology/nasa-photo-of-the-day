import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BASE_URL, API_KEY, DATE } from "../src/constants/index";

function App() {
  const [picture, setPicture] = useState({});
  
  useEffect(() => {
    const fetchData = () =>{
    axios
    .get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}&date=${DATE}`)
    .then((res) => {
      setPicture(res.data.hdurl);
      // console.log(res.data)
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
      
    </div>
  );
}

export default App;
