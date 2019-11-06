import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import PhotoCard from "./components/PhotoCard"

function App() {
  const [nasaImg, setNasaImg] = useState([]);
  useEffect(() => {
    
    axios.get("https://api.nasa.gov/planetary/apod?api_key=6TkqVIfgilHERfcGBexFVe1ENz2zmp540eyAHZFk")
    .then(res => {
      console.log(res.data);
      setNasaImg(res.data);
    });

  }, []);

  return (
    <div className="App">
      <header><h1>NASA PHOTO OF THE DAY</h1></header>
      <PhotoCard title={nasaImg.title} url={nasaImg.url} explanation={nasaImg.explanation} date={nasaImg.date} /> 
    </div>
  );
}

export default App;