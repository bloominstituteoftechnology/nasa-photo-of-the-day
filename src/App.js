import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import TitleSect from "./components/title.js";
import CopyrightSect from "./components/copyright.js";
import ImageSect from "./components/image.js";
import DateSect from "./components/date.js";
import ExplanationSect from "./components/explanation.js";

function App() {

//returns

  return (
    <div className="App">
      <TitleSect/>
      <ImageSect/>
      <DateSect/>
      <ExplanationSect/>
      <CopyrightSect/>
    </div>
  );
}

export default App;
