import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'

import { API_KEY, BASE_URL } from './constants/index'


export default function App() {
  const [imageSet, setImageSet] = useState([])
  const [currentCamera, setCurrentCamera] = useState(null)
  const rovers = ['curiosity', 'opportunity']

  console.log(rovers)
  const openImage = cameraName => {
    setCurrentCamera(cameraName)
  }

  const closeImage = () => {
    setCurrentCamera(null)
  }

  // useEffect(() => {
  //   axios.get(`${BASE_URL}`)
  // })

  const Rovers = props => {
    <div className="rover">

    </div>
  }

  return (
    <div className="App">
      <h1>Choose a rover: </h1>
        <div className="rover">
          {rovers[0]}
          <button onClick={() => openImage(rovers[0])}>
            See Image
          </button>
        </div>
    </div>
  );
}

