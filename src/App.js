import React, { useState, useEffect } from "react";
import { BASE_URL, API_KEY } from '../src/constants/index'
import "./App.css";
import Apod from './ApodDisplay'
import DateSelector from './DateSelector'

function App() {

  const [today, setToday] = useState(true)
  
  return (
    <div className="App">
      <header>
        <h1>NASA APOD</h1>
        <h2>Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</h2>
      </header>
      <Apod />
      <DateSelector />
    </div>
    
  );
}

export default App;
