import React, { useState, useEffect } from "react";
import axios from 'axios';
import Photo from './components/Photo'

import "./App.css";

function App() {
  const [photo, setPhoto] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date')
      .then(res => {
        setPhoto(res.data);
      })
      .catch(err => {
        console.error(err);
        setError("Sorry, try again soon");
      })
  }, []);



  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      { error ? 
        <h1>{error}</h1> :
        <h1>Astronomy Picture of the Day from NASA</h1>
      }
      <div className='loading'>
        { !photo && <h3>Loading...</h3> }
      </div>
      {
        photo && <Photo photo={photo} setPhoto={setPhoto} />
      }
    </div>
  );
}

export default App;
