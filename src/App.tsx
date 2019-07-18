import React, { useState, useEffect } from 'react';
import './App.scss';

import APOD from './components/APOD';

import Axios from 'axios';

function App() {
  const [apodData, setApodData] = useState();

  function retrieveAPOD() {
    (async () => {
      try {
        const now = new Date();
        setApodData(
          await Axios.get('https://api.nasa.gov/planetary/apod', {
            params: {
              date: `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`,
              hd: false,
              api_key: 'DEMO_KEY',
            },
          }),
        );
      } catch (e) {
        console.log(e);
      }
    })();
  }
  useEffect(retrieveAPOD, []);
  return (
    <div className="App">
      <APOD response={apodData} />
    </div>
  );
}

export default App;
