import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Image from './components/image';
import Header from './components/header';

function App() {
  const [image, setImage] = useState('');

  useEffect(() =>{
    axios
    .get('https://api.nasa.gov/planetary/apodn?api_key=K0TUCGzB15EY9tgypOdtpK1dfueWlvUyCVCdPDLQ')
    .then((res) =>{
      setImage(res.data);
    })
    .catch((err) =>{
        console.log(err, 'error');
    })
  }, [])

  return (
    <div className="App">
      <Header />
      <Image image={image} />
    </div>
  );
}

export default App;
