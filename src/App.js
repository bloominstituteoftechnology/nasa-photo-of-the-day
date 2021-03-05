import axios from "axios";
import React, { useState, useEffect, Component} from "react";
import { API_KEY, BASE_URL } from "./index";
import "./App.css";

// ... Some important stuff that I should use ...

//Below is the axios request to use the api for APOD
//GET https://api.nasa.gov/planetary/apod

function App() {

  const [photo, setPhoto] = useState([])

  useEffect(() => {

    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(({data}) => setPhoto(data))
    .catch(err => console.log(err))

  }, [])

  return (
    <div className="App"> {/* main div, i'll use this as the container div */}

      <header> {/* open the header here */}
        <h1>Nasa Photo Of The Day App</h1>
        <h2>This is my first full on react app that I have made on my own! <br/>I hope you enjoy it.</h2>
      </header>

      <main>
        {
          photo &&
          <>
          <div className="main-pic">

          </div>
          </>
        }
      </main>

    </div>



  );
}

export default App;
