import React, { useState, useEffect } from 'react'
import "./App.css";
import axios from 'axios';
import { BASE_URL, API_KEY } from './api.js/index';
import Heading from './Heading/Heading'

function App() {
  const [error, setError] = useState(null)
  const [title, setTitle] = useState(null)
  const [img, setImg] = useState(null)
  const [copyright, setCopyright] = useState(null)
  const [head, setHead] = useState([])
  


  
  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => {
      setHead(res)
      setImg(res.data.hdurl)
      setTitle(res.data.title)
      setCopyright(res.data.copyright)
    })
    .catch(err => {
      console.error(err)
      setError('ERROR CODE 51 Technical Dificulties')
    })
  })

  return (
    <div className="App">
      {error && <h1>{error}</h1>}
      <Heading title={title} img={img} copyright={copyright} />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
    
  );
}

export default App;
