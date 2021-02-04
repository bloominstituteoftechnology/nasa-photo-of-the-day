import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from './components/Header'
import PhotoContainer from './components/PhotoContainer'
import FirstPhoto from './components/FirstPhoto'

function App() {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    const data = axios
    .get('https://api.nasa.gov/planetary/apod?api_key=ZrZ65g5YPadjo7KvnT1dXIKSGZuc2Y2Bq9EMsrrL')
    .then((res) => {
      console.log(res)
      setPhoto(res.data)
    })
    .catch(err => {
      console.log("No Image Found", err)
      console.log(data)
    })
  }, [])

  return (
    <div className="App">
      <Header />
      <PhotoContainer 
      key={photo.id}
      date={photo.date}
      explanation={photo.explanation}
      title={photo.title}
      url={photo.url}
      copyright={photo.copyright}
      />
    </div>
  );
}

export default App;
