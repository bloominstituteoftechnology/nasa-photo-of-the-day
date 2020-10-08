import React, { useState, useEffect } from "react";
import "./App.css";
// import {API_KEY, BASE_URL} from '../src/constants/index'

import Data from './components/Data'


function App() {
  // useEffect(() => {
  //   axios.get("https://api.nasa.gov/planetary/apod?api_key=rDLuS1OxbD26VJPygpmoRhTKPA0l6bb4sIHGGQJi&date=2020-08-08")
  //   api data : date,explanation,hdurl,media_type,service_verison,title,url
  //   .then(res =>{ 
  //     console.log("res data :", res);
  //   })
  //   .catch(err => { 
  //     console.log("err msg : ", err);
  //   });
  // })
 
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
