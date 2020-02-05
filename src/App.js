import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard  from "./components/PhotoCard";
import "./App.css";

function App() {
const [image, setImage] = useState({});
useEffect(() => {
  axios
     .get('https://api.nasa.gov/planetary/apod?api_key=w44QUG2ECbsfHOtpLlFGuMF5GYogIeRbyiGVewze')
     .then(response => {
       setImage(response.data);
     });
}, [])

  return (
    <div className="App">
        <PhotoCard title={image.title}
        url={image.url}
        explanation={image.explanation} />
    </div>
  );
}

export default App;
