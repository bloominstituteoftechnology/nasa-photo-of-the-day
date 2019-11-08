import React, {useState, useEffect} from "react";
import "./App.css";
import NavLinks from "./Components/PageTop/NavBar";
import axios from "axios";
import Example from "./Components/PageTop/styledNav"

function App() {
  const [photoData, setPhotoData] = useState([]);
  useEffect(()=>{
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(response =>{
        setPhotoData(response.data)
        console.log(response.data);
    })

},[])
  return (
    <div className="App">
      <Example/>
      <h2>Picture of the Day</h2>
      <h3>{photoData.title}</h3>
      <img src={photoData.hdurl} alt='vast universe'/>
      <div className="content">
      <p>Taken by: {photoData.copyright} </p>
      <p>Description: {photoData.explanation} </p>
      <p>Date taken: {photoData.date}</p>
      </div>
    </div>  
  );
}

export default App;
