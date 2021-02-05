import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import ReactPlayer from "react-player"
import Details from './Details.js'

const apiURL =`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`


function App() {
  const [currPic, setPic] = useState();
  const [date, setDate] = useState();
 useEffect(()=>{
   


   axios.get(apiURL)
   .then(res=> {
     setPic(res.data.url)
    console.log(res.data.url)
    
    
    })
   
   .catch(err=> console.log(err));
 }, []);

 function getRandomPicture(){
  function getRandomDate(max, min){
    return Math.floor(Math.random() * (max - min) + min);
  }
  var year = getRandomDate(2021, 2000);
  var month = getRandomDate(1,13)
  var day =getRandomDate(1,32)
  if(month < 10){
    month = "0" + month;
  }
  if(day < 10){
    day = "0" + day;
  }
  setDate(`${month}/${day}/${year}`);
  
  const apiURL =`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${year}-${month}-${day}`

  axios.get(apiURL)
  .then(res=> {
    setPic(res.data.url)
  console.log(res.data.url)
  
  })
  .catch(err=> console.log(err.data));
}
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
      <p>It was taken on {date}</p>
      <button onClick={getRandomPicture}>Get Random Picture</button>
      <Details/>
    </div>
  );
}

export default App;



