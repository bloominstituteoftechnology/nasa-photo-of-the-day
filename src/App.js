import React, { useEffect } from "react";
import "./App.css";
import axios from 'axios';

function App() {

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=Ld5h15yFKBzDsrJFoXcegi9MuHFrYcag3ViJm3iH`)
      .then(res => {
        console.log("Here", res);
      })
      .catch(err => {
        console.log("Error", err);
      });
  }, []);

  return (
    <div className="App">
    </div>
  );
}

export default App;
