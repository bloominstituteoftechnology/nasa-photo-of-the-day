import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

 function App() {
  const [card, setCard] = useState([])
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then((resp) =>{
      setCard(resp.data)
    })
  }, [])
  return (
    <div className = 'photoCard'>
<h3 className ='title'>{card.title}</h3>
<h3 className = 'date'>{card.date}</h3>
<p className = 'explanation'>{card.explanation}</p>
<img className = 'image' src={card.hdurl} alt="picture of stars"></img>
    </div>
  )
 }

export default App;
