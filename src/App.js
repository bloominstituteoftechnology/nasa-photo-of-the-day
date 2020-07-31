import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Post from "./components/post.js"


function App() {
  const [pics, setPics]= useState([])
  useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?date=2020-7-30&api_key=wVGVdi1S0uVBKPFjWK9QOMHdXqmU7lFHPaqM5Oru")
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
