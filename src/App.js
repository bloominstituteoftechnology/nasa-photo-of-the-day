import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios"
import Card from "./Components/Card";

function App() {
  const [nasaData, setNasaData]= useState([])

  useEffect(() => {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=GjNb0rJyTAIgAWhma78UqFZdzMGzdtcCNT98FcDC`)
    .then(response => {
      console.log(response.data)
      // const nasaPhoto = (response.data)
      // const objectInfo1 = Object.values(nasaPhoto)
      setNasaData(response.data.title)
    })
    .catch(error =>{
      console.log("sorry no image", error)
    })
  }, [])
  return (
    <div className="container">
    {/* {{nasaData.map((image) =>{
      return <Card key={image.id} imgURL={image.url} title = {image.title} /> }
    })} */}
    </div>
  );
}

export default App;
