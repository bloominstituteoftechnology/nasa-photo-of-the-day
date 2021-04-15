import React, { useState, useEffect } from "react";
import "./App.css";

import Axios from 'axios';

import { API_KEY } from './Configuration/Key.json';

import Nav from './Components/Nav';
import Image from './Components/Image';
import Dropdown from './Components/Dropdown';
import Footer from './Components/Footer';

function App() {

  const list = [];

  const current = {
    year: new Date().getFullYear().toString(),
    month: (new Date().getMonth() + 1).toString().match(/^[0-9]$/) ? '0' + (new Date().getMonth() + 1).toString() : (new Date().getMonth() + 1).toString(),
    day: new Date().getDate().toString()
  };

  for (let i = 1; i <= current.day; i++) {

    list.push(i.toString().match(/^[0-9]$/) ? '0' + i.toString() : i.toString());

  }

  list.push(current.day.toString().match(/^[0-9]$/) ? '0' + current.day.toString() : current.day.toString());

  // console.log(list);

  const [data, setData] = useState([]);

  const [date, setDate] = useState(`${current.year}-${current.month}-${list.pop()}`);

  const [fallback, setFallback] = useState(null);

  const APOD = new URL('/planetary/apod', 'https://api.nasa.gov');

  useEffect(() => {

    APOD.search = new URLSearchParams({ api_key: API_KEY, date: date  });

    Axios.get(encodeURI(APOD.href)).then((Res) => {

      if (Res.data && !Res.data.url.includes('https://apod.nasa.gov/apod/image')) {
        throw new Error(`No image of the day for ${date}.`);
      }

      setFallback(date);

      setData(Res.data);

    }).catch((Err) => {

      setDate(fallback);

      console.log(Err);

    });

  }, [date]);

  // console.log(data);

  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      {Nav()}
      {Image({ url: data.url })}
      {Dropdown({ date, setDate, list, current })}
      {Footer()}
    </div>
  );
}

export default App;
