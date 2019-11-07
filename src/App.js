import React, {useState, useEffect} from "react";
import "./App.css";
import NavLinks from "./Components/PageTop/NavBar";
import axios from "axios";

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
      <NavLinks />
      <h2>Picture of the Day</h2>
      <h3>{photoData.title}</h3>
      <img src={photoData.hdurl} alt='vast universe'/>
      <p>Taken by: {photoData.copyright} </p>
      <p>Description: {photoData.explanation} </p>
      <p>Date taken: {photoData.date}</p>
    </div>
    
  );
}

export default App;
