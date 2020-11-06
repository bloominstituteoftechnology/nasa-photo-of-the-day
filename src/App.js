import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Photo from './components/image';
import Header from './components/header';


function App() {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState(null);
  const [title, setTitle] = useState(null);

  useEffect(() =>{
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`)
    .then((res) =>{
      console.log(res.data);
      setImage(res.data.url);
      setDescription(res.data.explanation);
      setTitle(res.data.title);
    })
    .catch((err) =>{
        console.log(err, 'error');
    })
  }, [])

  return (
    <div className="App">
      <Header />
      <Photo image={image} title={title}  description={description}/>
    </div>
  );
}

export default App;
