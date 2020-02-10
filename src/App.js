import React, { useEffect, useState } from 'react';
import './App.css';

import Loader from './components/Loader/Loader';
import PhotoOfTheDay from './components/PhotoOfTheDay/PhotoOfTheDay';
import axios from 'axios';

function App() {
  const [date, setDate] = useState();
  const [title, setTitle] = useState();
  const [url, setUrl] = useState();
  const [explanation, setExplanation] = useState();
  const [copyright, setCopyright] = useState();

  const apiKey = 'CecIldgQmXLCCTnr02fOh2srCshbmyIYKYPHc7EA';
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then(response => {
        setDate(response.data.date);
        setTitle(response.data.title);
        setUrl(response.data.url);
        setExplanation(response.data.explanation);
        setCopyright(response.data.copyright);
      })
      .catch(error => console.log(error));
  }, []);
  // console.log(title);
  if (!url) return <Loader />;
  return (
    <div className='App'>
      <p>
        {/* <Loader /> */}
        <PhotoOfTheDay
          date={date}
          title={title}
          url={url}
          explanation={explanation}
          copyright={copyright}
        />
      </p>
    </div>
  );
}

export default App;
