import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import AstronomyCard from "./components/AstronomyCard";
import AstronomyContainer from "./components/AstronomyContainer";

const App = () => {
  return (
    <AstronomyContainer />
  )
}
function App() {
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=bsNWg04N6Smc406bMZb2orkoxvbSr8AqZ02HLD02")
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log("Error", error)
    })
  })
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
