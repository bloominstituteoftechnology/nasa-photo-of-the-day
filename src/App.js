import React, { useEffect, useState } from "react";
import "./App.css";
import ImageList from "./components/imageCardContainer/ImageList"
import Header from "./components/headerContainer/Header"
import axios from "axios"



function App() {

  // const [images, setImages] = useState([])
  // useEffect(() => {
  //   axios
  //     .get("https://api.nasa.gov/planetary/apod?api_key=nUuIApI33z9ii9bOvfvcgpBhGDCqsYQyMjzIgGd0")
  //     .then(res => {
  //       console.log(res)
  //     })
  //     .catch(err => console.log("this is the error" , err))
  // }, [])
  return (
    <div className="App">
        <ImageList/>
    </div>
  );
}

export default App;
