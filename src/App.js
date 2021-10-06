import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import TitleFunc from "./Nasa/NasaTop";
import MidSect from "./Nasa/NasaMid";
import DescSect from "./Nasa/NasaThird";

function App() {


 
  return (
    <div className="App">
      <p>
        
      </p>
<TitleFunc />
<MidSect />
<DescSect />
    </div>
  );
}

export default App;
