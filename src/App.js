import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './index.css';
import Title from './title';
import Image from './image';
import Info from './info';

function App() {
  const [imageData, setImageData] = useState([]);
  const { copyright, date, explanation, title, hdurl } = imageData;

  useEffect(() => {
    const fetchImage = () => {
      axios
        .get(
          'https://api.nasa.gov/planetary/apod?api_key=xI9ypauVaNQDdIHdhi9cDZoiXTdfZH8cxLJcBp5o&date=2012-03-14'
        )
        .then((res) => {
          setImageData(res.data);
        })
        .catch((err) => console.log('Error: ' + err));
    };
    fetchImage();
  }, []);

  return (
    <div className='App'>
      <Title />
      <Image url={hdurl} />
      <Info
        copyright={copyright}
        date={date}
        explanation={explanation}
        title={title}
      />
    </div>
  );
}

export default App;
