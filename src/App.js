import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Nasa-Header/Nasa-Header';
import Image from './components/Image/Image';
import Date from './components/Date/Date';
import axios from 'axios';
import "./App.css";

function App() {
  const [ image, setImage ] = useState();
  const [ date, setDate ] = useState();
  const [ title, setTitle ] = useState();
  const [ story, setStory ] = useState();

  useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then((res) => {
          setImage(res.data.hdurl);
          setTitle(res.data.title);
          setStory(res.data.explanation);
          return res;
      })
      .then((res) => {
        setDate(res.data.date);
        console.log(res.data)
      })
  }, [])

  return (
    <div>
      <Header />
      <div className="App">
        <Date date={date} />
        <Image src={image} title={title} explanation={story}/>
      </div>
    </div>
  );
}

export default App;
