import React from "react";
import "./App.css";
import CardBuilder from './Components/CardBuilder'
import Card from './Components/Card'
import Date from './Components/Date'

function App() {
  return (
    <div className="App">
      <CardBuilder/>
      <Date/>
    </div>
  );
}

export default App;
