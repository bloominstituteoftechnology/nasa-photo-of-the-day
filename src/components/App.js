import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BASE_URL, API_KEY } from '../constants/index';
import "../App.css";
import { isTemplateElement } from "@babel/types";
import Photo from './Photo';
import Explanation from "./Explanation";
import Header from './Header';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        console.log(res.data)
        setData(res.data)
      })
      .catch(err => {
        setError(`We're experiencing technical difficulties, please try again...`)
      })
  }, [])


  return (
    <>
    <div className="App">
      { error && <h1>{error}</h1> }
        <Header copyright={data.copyright} date={data.date} title={data.title} />

      { <Photo photo={data.url} /> }
    </div>
    <div>
      { <Explanation explanation={data.explanation} /> }
    </div>
    </>
  )
};

export default App;
