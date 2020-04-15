import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Pictures from './components/PictureContainer/Picture';
import Information from './components/Information/Information';
import Expla from './components/Explanation/Explanation';


const App = () => {
  const [pic, setPic] = useState('');
  const [title, setTitle] = useState('Title');
  const [date, setDate] = useState('Date');
  const [expla, setExpla] = useState('Explanation');


  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=53EAKbcgr8iwccEsLf1sr1MV5dFS3bU0ZseKATiX")
      .then((res) => {
          console.log('response', res)
          setPic(res.data.hdurl);
          setTitle(res.data.title);
          setDate(res.data.date);
          setExpla(res.data.explanation);
        })

      .catch((err) => {
        console.log("There was an error: ", err);
      })

}, []);

  return (
    <div className="App">
      <NavBar />
      <Information title={title} date={date}/>
      <Pictures pic={pic}/>
      <Expla expla={expla} />
    </div>
  );
}

export default App;