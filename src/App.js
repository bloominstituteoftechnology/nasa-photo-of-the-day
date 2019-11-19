import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Photo from "./components/Photo";
import Date from "./components/Date";

function App() {
  const [photo, setPhoto] = useState([]);

  const didUpdate = () => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        setPhoto(response.data);
        console.log(response);
      })
      .catch(error => console.log(error));
  };

  useEffect(didUpdate, []);

  return (
    <div className="App">
      <Date photo={photo} />
      <h1>NASA Photo of the Day</h1>
      <Photo photo={photo} />
    </div>
  );
}

export default App;
