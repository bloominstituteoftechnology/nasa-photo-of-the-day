import React from "react";
import "./App.css";
import { useState, useEffect} from "react";
import axios from "axios";

function App() {

  const [nasaUrl, setNasaUrl] = useState('')
  const [nasaDate, setNasaDate] = useState('')
  const [nasaTitle, setNasaTitle] = useState('')
  const [nasaExplanation, setNasaExplanation] = useState('')
  const [nasaMediaType, setNasaMediaType] = useState('')

  useEffect( () => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then( response => {
        console.log("nasa api", response.data)
        setNasaUrl(response.data.url)
        setNasaDate(response.data.date)
        setNasaTitle(response.data.title)
        setNasaExplanation(response.data.explanation)
        setNasaMediaType(response.data.media_type)
      })
      .catch( error => {
        console.log(error)
      });
  }, []);

  return (
    <div className="App">
      <p>
        {
        // Read through the instructions in the README.md file to build your NASA
        // app! Have fun 🚀!
        }
      </p>
      <div className='header'>
        <header>
          <nav>
            <button onClick={ () => alert(nasaDate) }>Date</button>
            <button onClick={ () => alert(nasaTitle) }>Title</button>
            <button onClick={ () => alert(nasaExplanation) }>Explanation</button>
          </nav>
          <p></p> {/*temporary spacing*/}
        </header>
        <div className='body'>
          <div>
            <iframe width='420' height='315'
              src={nasaUrl}>
            </iframe>
          </div>
          <div className='footer'>
            <footer>
              <h3>Extra Info:</h3>
              <p>Media Type: {nasaMediaType}</p>
              <p>URL: {nasaUrl}</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
