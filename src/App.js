import axios from "axios";
import React, {useState, useEffect} from "react";
import { BASE_URL, API_KEY } from "./index";
import Title from "./Title";
import Details from "./Details";
import Photo from "./Photo";
import "./App.css";

function App() {
  
  return (
    <div className="App">
      <h1>Nasa Photo of the Day</h1>
      <Title />
      <Photo />
      <Details />
    </div>
  );
}


export default App;
