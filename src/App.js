import React, {useState, useEffect} from "react";
import axios from "axios"
import NasaPic from  "../src/NasaPic"

import "./App.css";
import styled from 'styled-components'





function App() {

const [picdata, setPicData] =useState([])

const useEffectFn = () => {

axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
.then((res) => {
  // console.log(res.data.photos[1].camera.full_name);
  // console.log("this is res", res.data)
  console.log("this is res", res)
  console.log(res.data)
  setPicData(res.data); 
  console.log("This is setpicdata", setPicData)
  
})



};


useEffect(useEffectFn, [])


  return (
    <div className="App">
   <NasaPic data= {picdata} />
      
    </div>
  );
}

export default App;
