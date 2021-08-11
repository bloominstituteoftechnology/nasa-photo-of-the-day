import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import { BASE_URL, API_KEY } from './constants/index'
import Title from './Title'
import Image from './Image'
import Copyright from './Copyright'
import Date from './Date'
import Explanation from './Explanation'

function App() {
  const [title, setTitle] = useState(null)
  const [url, setImage] = useState(null)
  const [copyright, setCopyright] = useState(null)
  const [date, setDate] = useState(null)
  const [explanation, setExplanation] = useState(null)


  useEffect(() => {
    axios.get(`${BASE_URL}/?api_key=${API_KEY}`)
      .then(res => {
        console.log(res)
        setTitle(res.data.title)
        setImage(res.data.url)
        setCopyright(res.data.copyright)
        setDate(res.data.date)
        setExplanation(res.data.explanation)
      })
  }, [])


  return (
    <div className="App">
      <Title title={title}/>
      <p>TEST
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Image url={url}/>
      <Copyright copyright={copyright}/>
      <Date date={date}/>
      <Explanation explanation={explanation}/>
    </div>
  );
}

export default App;
