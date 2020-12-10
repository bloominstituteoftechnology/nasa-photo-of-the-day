//Importing React and Hooks
import React, { useState, useEffect } from "react";
//Importing the necesary to fetch the NASA API
import axios from 'axios'
//NASA API
import { BASE_URL, API_KEY } from '../constants'

//Own Components
import Header from '../components/Header'
import Media from '../components/Media'

//CSS Styles
import 'normalize.css';
import "../App.css";

function App() {

  const [currentMedia, setCurrentMedia] = useState([])
  // With currentContent we will defined witch Component will be mount on DOM
  const [currentContent, setCurrentContent] = useState('Media')

  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}`)
      .then((res) => {
        setCurrentMedia(res.data)
      })
      .catch((err) => {
        console.log('Ups!')
      })
  }, [])

  return (
    <>
      <Header />
      <Media media_type={currentMedia.media_type} url={currentMedia.url} />
    </>


    // <div className="App">
    //   <p>
    //     Read through the instructions in the README.md file to build your NASA
    //     app! Have fun <span role="img" aria-label='go!'>🚀</span>!
    //   </p>
    // </div>
  );
}

export default App;
