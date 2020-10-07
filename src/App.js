import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import { API_KEY, BASE_URL } from "./constants/index";

import Image from './components/Image'

export default function App() {
  const [imageSet, setImageSet] = useState([]);
  const [currentCamera, setCurrentCamera] = useState(null);
  const rovers = [{id: 0, name:"curiosity"}, {id: 1, name:"opportunity"}];

  console.log(rovers);
  const openImage = (cameraName) => {
    setCurrentCamera(cameraName);
  };

  const closeImage = () => {
    setCurrentCamera(null);
  };

  // useEffect(() => {
  //   axios.get(`${BASE_URL}`)
  // })

  const Rover = (props) => (
    <div className='rover'>
      {props.name}
      <button onClick={() => openImage(props.name)}>See Image</button>
    </div>
  );

  return (
    <div className='App'>
      <h1>Choose a rover: </h1>
      <div className='rovers'>
        {
        rovers.map(rv => {
          return <Rover key={rv.id} name={rv.name} />
        })
      }
      </div>
      {
        currentCamera && <Image camera={currentCamera} close={closeImage} />
      }
    </div>
  );
}
