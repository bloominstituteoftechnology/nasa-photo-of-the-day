import React, { useState } from "react";
import "./App.css";
import Apod from './ApodDisplay'
import DateSelector from './DateSelector'
import PastApod from "./PastApod";

function App() {

  const [today, setToday] = useState(true)
  const [date, setDate] = useState('')
  
  return (
    <div className="App">
      <header>
        <h1>NASA APOD</h1>
        <h2>Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</h2>
      </header>
      {today ? <Apod /> : <PastApod date={date} />}
       <DateSelector setDate={setDate} setToday={setToday} />
      
    </div>
    
  );
}

export default App;
