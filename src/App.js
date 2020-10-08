import React, { useState, useEffect } from "react";
import "./App.css";
// import {API_KEY, BASE_URL} from '../src/constants/index'
import axios from 'axios'

import Data from './components/Data'


function App() {
  useEffect(() => {
    axios.get("https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATE&end_date=END_DATE&api_key=API_KEY")
    .then(res =>{ 
      console.log("res data :", res);
    })
    .catch(err => { 
      console.log('You messed up!', err);
    });
  })
 
  return (
    <div className="App">
      <Data />
        
      <p>
       This is the first part of this project. Styling will be done later.<span role="img" aria-label='go!'>🚀</span>!
      </p>
      
    </div>
  );
};

export default App;
