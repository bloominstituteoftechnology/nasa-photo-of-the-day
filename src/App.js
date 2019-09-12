import React from "react";
import "./App.css";
import NasaPic from "./NASA FOLDER/NasaPic";
import styled from "styled-components";




function App() {
  return (
    <div className="App">
      <h1>NASA PIC OF THE DAY</h1>
        <h2>
          Below is NASA's pic of the Day!
        </h2>
        <NasaPic />
    </div>
  );
}

export default App;
