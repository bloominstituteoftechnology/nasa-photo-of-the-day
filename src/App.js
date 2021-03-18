import React, { useState, useEffect } from "react";
import axios from "axios"
import "./App.css";
import Header from "./components/Header/Header.js"
import Photo from "./components/Photo/Photo.js"
// import reactDomTestUtilsProductionMin from "react-dom/cjs/react-dom-test-utils.production.min";



export default function App() {
  const[photoData, setPhotoData] = useState([]);

  
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(res => {
        // const pData = res.data;
        setPhotoData(res.data)
      })
      .catch(err => {
        console.log(err);
      })
    }, []);


  return (
    <div className="App">
      <Header />
      <Photo photoData={photoData}/>
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <s pan role="img" aria-label='go!'>🚀</span>!
      </p> */}
    </div>
  );
};





