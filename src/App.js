import React, { useState, useEffect } from 'react'
import "./App.css";
import axios from 'axios';
import { BASE_URL, API_KEY } from './api.js/index';
import Heading from './Heading/Heading'
import Paragraph from './Paragraph/Paragraph'

function App() {
  const [error, setError] = useState(null)
  const [title, setTitle] = useState(null)
  const [img, setImg] = useState(null)
  const [copyright, setCopyright] = useState(null)
  const [paragraph, setParagraph] = useState(null)
  const [date, setdate] = useState(null)
  
  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => {
      setImg(res.data.hdurl)
      setTitle(res.data.title)
      setCopyright(res.data.copyright)
      setParagraph(res.data.explanation)
      setdate(res.data.date)
    })
    .catch(err => {
      console.error(err)
      setError('ERROR CODE 51')
    })
  })

  return (
    <div className="App">
      {error && <h1>{error}</h1>}
      <Heading title={title} img={img}  />
      <Paragraph date={date} paragraph={paragraph} copyright={copyright}/>
    </div>
    
  );
}

export default App;
