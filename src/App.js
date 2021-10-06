import React, { useState, useEffect } from "react";
import { BASE_URL, API_KEY } from '../src/Constants/index'
import axios from 'axios'
import "./App.css";
import Header from './Components/header'
import Photo from './Components/photo'
import Footer from './Components/footer'

function App() {

  const [ photoURL, setPhotoURL ] = useState('')
  const [ photoDescription, setPhotoDescription ] = useState('')

  useEffect(() => {
      axios.get(`${BASE_URL}${API_KEY}`)
      .then( res => {
          setPhotoURL(res.data.url)
          setPhotoDescription(res.data.explanation)
      })
      .catch( err => {
          console.error(err)
      })
  } ,[])

  return (
    <div className="App">
      < Header />
      < Photo photoDescription={photoDescription} photoURL={photoURL}/>
      < Footer photoURL={photoURL}/>
    </div>
  );
}

export default App;
