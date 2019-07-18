import React, { useState, useEffect } from 'react';
import './App.scss';

import APOD from './components/APOD';
import DatePicker from './components/DatePicker';

import Axios from 'axios';

function App() {
  const [selectedDate, setSelectedDate] = useState(dateToCurrISO({ date: new Date() }));
  const [apodData, setApodData] = useState();
  interface DateToCurrISOArg {
    date: Date;
  }
  function dateToCurrISO({ date }: DateToCurrISOArg) {
    return (`${date.getFullYear()}
      -${date.getMonth() + 1}
      -${date.getDate()}`.replace(/\s/g, '')
    );
  }

  function retrieveAPOD() {
    (async () => {
      try {
        setApodData(
          await Axios.get('https://api.nasa.gov/planetary/apod', {
            params: {
              date: selectedDate,
              hd: false,
              api_key: 'iUfFf2wnqiEnFmvAQmVQjfePu7chjscyJtotn8Kr',
            },
          }),
        );
      } catch (e) {
        console.log(e);
      }
    })();
  }
  useEffect(retrieveAPOD, [selectedDate]);
  return (
    <div className="App">
      <DatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
      <APOD response={apodData} />
    </div>
  );
}

export default App;
