import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import ReactPlayer from "react-player"




function App() {
  const [currPic, setPic] = useState();
  
 useEffect(()=>{
   function getRandomDate(max, min){
     return Math.floor(Math.random() * (max - min) + min);
   }
   var year = getRandomDate(2021, 2000);
   var month = getRandomDate(1,13)
   var day =getRandomDate(1,31)
   if(month < 10){
     month = "0" + month;
   }
   if(day < 10){
     day = "0" + day;
   }
   console.log(year);
   console.log(month);
   console.log(day);

   const apiURL =`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${year}-${month}-${day}`

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
