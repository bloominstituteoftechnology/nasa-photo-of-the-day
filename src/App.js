import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Post from "./components/post.js"

function App() {
  const [pics, setPics]= useState([])
  useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(res => {console.log(res);
    setPics(res.data)})
    .catch(err => console.log(err))

  }, []);

  return (
    <div className="App">
      <h1>NASA Picture of The Day</h1>
      
    <Post
    key={pics.id}
    title={pics.title}
    date={pics.date}
    explanation={pics.explanation}
    url={pics.url}
    copyright={pics.copyright}
    />
    </div>
  );
}

export default App;
