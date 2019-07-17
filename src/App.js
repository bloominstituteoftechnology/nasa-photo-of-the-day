import React from "react";
import "./App.css";
import { useState, useEffect} from "react";
import axios from "axios";
import Header from './components/header.js'
import Body from './components/body.js'
import Footer from './components/footer.js'

function App() {

  const [nasaUrl, setNasaUrl] = useState('')
  const [nasaDate, setNasaDate] = useState('')
  const [nasaTitle, setNasaTitle] = useState('')
  const [nasaExplanation, setNasaExplanation] = useState('')
  const [nasaMediaType, setNasaMediaType] = useState('')
  //&date=2019-07-15 temporary code I will use for buttons

  useEffect( () => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=o3mte2eiRqwJgxSDRY04yt9QdHLoqv5FzHqkNiwX")
      .then( response => {
        console.log("nasa api:", response)
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
            <Header
              propsDate={nasaDate}
              propsTitle={nasaTitle}
              propsExplanation={nasaExplanation}
            />
          </nav>
          <p></p> {/*temporary spacing*/}
        </header>
        <div className='body'>
          <div>
            <Body
              propsUrl={nasaUrl}
              propsMediaType={nasaMediaType}
            />
          </div>
          <div className='footer'>
            <footer>
              <h3>Extra Info:</h3>
              <Footer
                propsMediaType={nasaMediaType}
                propsUrl={nasaUrl}
              />
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
