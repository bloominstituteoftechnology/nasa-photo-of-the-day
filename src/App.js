import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import { BASE_URL, API_KEY } from './constants/index'
import Title from './Title'
import Image from './Image'
import Copyright from './Copyright'
import Explanation from './Explanation'

import { Alert, Button, Fade } from 'reactstrap'

function App() {
  const [nasaData, setNasaData] = useState({})
  const [fadeIn, setFadeIn] = useState(true)

  const toggle = () => setFadeIn(!fadeIn)

  useEffect(() => {
    axios.get(`${BASE_URL}/?api_key=${API_KEY}`)
      .then(res => {
        setNasaData(res.data)
      })
  }, [])


  return (
    <div className="App">
      <Title className="title" title={nasaData.title}/>
      <Alert color="primary">NEW CONTENT EACH DAY</Alert>
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <Button color="success" onClick={toggle}>Toggle Picture</Button>
        <Fade in={fadeIn} tag="h5">
          <Image className="image" url={nasaData.url}/>
        </Fade>
      <Copyright className="copyright" copyright={nasaData.copyright} date={nasaData.date}/>
      <Explanation className="explanation" explanation={nasaData.explanation}/>
    </div>
  );
}

export default App;
