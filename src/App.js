// Import Statements
import React, { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import UpperSection from "./components/UpperSection";
import LowerSection from "./components/LowerSection";


// Beginning of WebPage
function App() {

  const [data, setData] = useState([]);
  const [img, setImg] = useState();

  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=v6KZ17xVdXHN6V6TWPzbPFWqRLwVSiHl5GgNpXe4')
    .then(res => {
      
      console.log(res.data);
      setData(res.data);
      setImg(res.data.hdurl);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  return (
    <>
      <UpperSection pictures = {img} />
      <LowerSection data = {data}/>
    </>
  );
}

export default App;
