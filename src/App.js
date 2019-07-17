import React from "react";
import "./App.css";
import { useState, useEffect} from "react";
import axios from "axios";

function App() {

  const [nasaUrl, setNasaUrl] = useState('')
  useEffect( () => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then( request => {
        console.log(request.data.url)
        setNasaUrl(request.data.url)
      })
      .catch( error => {
        console.log(error)
      });
  }, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <div className='header'>
        <header>
          im the header
          <nav>
            <a>link1</a>
            <a>link2</a>
            <a>link3</a>
          </nav>
        </header>
        <div className='body'>
          <div>
            <iframe width='420' height='315'
              src={nasaUrl}>
            </iframe>
          </div>
          <div className='footer'>
            <footer>
              im the footer
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
