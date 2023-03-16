import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";


function App() {
  const [image, setImage] = useState("")
  const [titleAnimationFinished, setTitleAnimationFinished] = useState(false);
 const [ h2content, seth2content] = useState("")
 const [pcontent, setpcontent] = useState("")


 
  useEffect(() => {
    const timer = setTimeout(() => {
      setTitleAnimationFinished(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const getImage = () => {
    // window.location.href = "http://google.com"
    axios.get("https://api.nasa.gov/planetary/apod?api_key=wiaCGZbAYr12ybcE87dk6myOc7rjsu3B0sJUEUkf").then(res => {
        clearbutton();
      setImage(res.data.url); 
      seth2content(res.data.date);
      setpcontent(res.data.explanation);
    
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
        <h2>{h2content}</h2>
        {image && (<img src={image} /> )}
        <p>{pcontent}</p>
   
     
    </div>
  );
}

export default App;
