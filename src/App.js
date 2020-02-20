import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import DateSelector from "./components/Date/DateSelector";
import Navbar from "./components/Navbar/Navbar"




function App() {
  return (
    <div className="App">
      <Navbar/>
      <DateSelector/>
    </div>
  );
}

export default App;
 