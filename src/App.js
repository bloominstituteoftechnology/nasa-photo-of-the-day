import axios from "axios";
import React, { useEffect, useState} from "react";
import "./App.css";


function App() {
const [showbutton, setShowbutton] = useState(false)
const [image, setImage] = useState("")

setTimeout(()=>{
  setShowbutton(true)
}, 6000)

let timeoutID;

function startTimer() {
  timeoutID = setTimeout(() => {
    setShowbutton(true);
  }, 6000);
}

function stopTimer() {
  clearTimeout(timeoutID);
}

const getImage = () =>{
  // window.location.href = "http://google.com"
  axios.get("https://api.nasa.gov/planetary/apod?api_key=wiaCGZbAYr12ybcE87dk6myOc7rjsu3B0sJUEUkf").then(res=>{
    setImage(res.data.url);
    setShowbutton(false);
    
  })
}


// const removeButton =()=>{
//   setShowbutton(false)
 
// }


  return (
    <div className="App containter">
      
        <p className="line-1 anim-typewriter">Welcome to NASA Photo of the Day </p>
        <button 
        onClick={getImage} 
        className="fade-in-button" 
        style={{display: showbutton ? "": "none"}}>Enter</button>
      {image && (<img src={image} />)}
    </div>
  );
}

export default App;
