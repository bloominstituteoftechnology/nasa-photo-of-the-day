import React, { useState, useEffect } from 'react';
import './App.scss';

import APOD from './components/APOD';
import DatePicker from './components/DatePicker';
import { Paper } from '@material-ui/core';

import Axios from 'axios';

function App() {
  const [selectedDate, setSelectedDate] = useState(dateToCurrISO({ date: new Date() }));
  const [apodData, setApodData] = useState();
  interface DateToCurrISOArg {
    date: Date;
  }
  function dateToCurrISO({ date }: DateToCurrISOArg) {
    const fullYear = `${date.getFullYear()}`;
    const fullMonth = date.getMonth().toLocaleString().length !== 2
      ? `0${date.getMonth() + 1}`
      : `${date.getMonth() + 1}`;
    const fullDate = date.getDate().toLocaleString().length !== 2
      ? `0${date.getDate()}`
      : `${date.getDate()}`;
    return (`${fullYear}-${fullMonth}-${fullDate}`);
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
      <Paper>
        <DatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
        <APOD response={apodData} />
      </Paper>
    </div>
  );
}

export default App;
