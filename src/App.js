import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";


function App() {
  const [image, setImage] = useState("")
  const [titleAnimationFinished, setTitleAnimationFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTitleAnimationFinished(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const getImage = () => {
    // window.location.href = "http://google.com"
    axios.get("https://api.nasa.gov/planetary/apod?api_key=wiaCGZbAYr12ybcE87dk6myOc7rjsu3B0sJUEUkf").then(res => {
      setImage(res.data.url); 
      clearbutton()
    })
  }

  function clearbutton (){
    setTitleAnimationFinished(false)
  }

  return (
    <div className="App containter">

      <h1
        onAnimationEnd={() => setTitleAnimationFinished(true)}
        className="line-1 anim-typewriter"> Welcome to NASA Photo of the Day </h1>
        {titleAnimationFinished && (<button
        onClick={getImage}
        className="fade-in-button">
        Enter </button>)}
      {image && (<img src={image} />)}
    </div>
  );
}

export default App;
