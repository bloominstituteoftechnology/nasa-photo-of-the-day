import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'

import Intro from './Components/Intro'
import Images from './Components/Image'
import {BASE_URL, API_KEY} from './Components/Links'
import ExplanationText from './Components/Explanation'


function App() {
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
      .then(res => {
        setPosts(res.data)
        
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        // this runs whether success or failure
      })

  },[])
  const openImage = () =>{

  }
  const closeImage = () =>{
    
  }
  
  return (
    <div>
      <h1>Astronomy Picture of the Day</h1>
      <h2>Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</h2>
      <Images />
    
    
     <ExplanationText />
    </div>
     
    
  );
}

export default App;
