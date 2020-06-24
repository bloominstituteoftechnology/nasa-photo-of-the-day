import React, { useState, useEffect } from 'react';
import "./App.css";
import axios from 'axios';
import Card from './components/Card';

const App = () => {
  const [picture, setPicture] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=OPfamgCyYwhJvre3PNrqYoTF4OdMQEPSYJ2XNNTg&date=1998-10-11')
      .then((res) => {
        console.log(res);
        setPicture(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Card
        key={picture.id}
        title={picture.title}
        date={picture.date}
        explanation={picture.explanation}
        copyright={picture.copyright}
        imgUrl={picture.url}
      />
    </div>
  );
}

export default App;
