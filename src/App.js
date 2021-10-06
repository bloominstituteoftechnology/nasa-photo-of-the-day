import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';


function App() {

  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        setImage(res.data.url);
        setImage(res.data.explanation);
      }).catch(err => {
        console.error(err);
      })
  }, [])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
