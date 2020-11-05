import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Photo from './components/image';
import Header from './components/header';


function App() {
  const [image, setImage] = useState();

  useEffect(() =>{
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then((res) =>{
      // console.log(res.data);
      setImage(res.data.url);
    })
    .catch((err) =>{
        console.log(err, 'error');
    })
  }, [])

  return (
    <div className="App">
      <Header />
      <Photo image={image} />
    </div>
  );
}

export default App;
