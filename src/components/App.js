import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import { BASE_URL, API_KEY } from '../constants/index';

import Title from './Title';
import Date from './Date';
import Picture from './Picture';
import Copyright from './Copyright';
import Explanation from './Explanation';



function App() {
  //const [cosmos, setCosmos] = useState(null);
  const [title, setTitle] = useState(null); //title of the picture
  const [date, setDate] = useState(null); //today's date
  const [picture, setPicture] = useState(null);//they have hd and normal version img url
  const [copyright, setCopyright] = useState(null); //the author name
  const [explanation, setExplanation] = useState(null); //what the picture is about
  //const [footer, setFooter] = useState(null);
  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        console.log(res.data)
        setPicture(res.data.url)
        setTitle(res.data.title)
        setDate(res.data.date)
        setCopyright(res.data.copyright)
        setExplanation(res.data.explanation)
      }).catch(err => {
        console.error(err)
      })
  })

  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <h1>Nasa Photo of the Day</h1>
      <p>Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p>
      <Title title={title}/>
      <Date date={date}/>
      <Picture picture={picture}/>
      <Explanation explanation={explanation} />
      <Copyright copyright={copyright} />
    </div>
  );
}

export default App;
