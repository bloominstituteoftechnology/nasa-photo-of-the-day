import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Photo from './components/Photo'
import { Button } from 'reactstrap';
import Example from './components/Example'

function App() {

  const [photo, setPhoto] = useState([])
  let today = new Date().toISOString().slice(0, 10)

  useEffect(() => {
    console.log(today)
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=gGa6hgmeKLSEJWTyugiafAgj9sY8H6esdgAYbM6P&date=2021-06-24`)
      .then(({ data }) => setPhoto(data))
      .catch(err => console.log(err))
    return () => console.log('Cleaning up')
  }, [])

  return (
    <div className="App">
      <Photo photo={photo} title={photo.title} description={photo.explanation} date={photo.date} imageURL={photo.url} />
    </div>

  );
}


export default App;
