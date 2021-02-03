import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import ReactPlayer from "react-player"


const apiURL ='https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14'

function App() {
  const [currPic, setPic] = useState();
  
 useEffect(()=>{
   axios.get(apiURL)
   .then(res=> {
     setPic(res.data.url)
    console.log(res.data.url)
    
    })
   
   .catch(err=> console.log(err));
 }, []);
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <p>The pic of the day is: 
       { currPic ? <img src={currPic} alt=""></img> :
        <ReactPlayer url={currPic}/>}
      </p>

    </div>
  );
}

export default App;
