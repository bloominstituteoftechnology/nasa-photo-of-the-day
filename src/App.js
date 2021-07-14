import React, { useState, useEffect } from "react";
import axios from "axios";
import Photo from "./Photo.js";
import "./App.css";

function App() {

  const url = 'https://api.nasa.gov/planetary/apod?api_key=hbQeB0ODFwlwO5hu3xLYgmNfwQicougVUBPwVIdx';
  const [data, setData] = useState();
  const [date, setDate] = useState("")
  
  const getData = async (url) => {
    try {
      const res = await axios.get(url);
      const picture = await res.data;
      console.log(picture)
      setData(picture);
    } catch(err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getData(url);
  }, []);
  useEffect(() => {
    getData(`${url}&date=${date}`);
  }, [date]);

  return (
    <div className="App">
      <header>
        <h1>Photo of the day:</h1>
      </header>
      <input 
      placeholder="enter date"
      type="date"
      onChange={e => setDate(e.target.value)}></input>
      <Photo photo={data}/>
    </div>
  );
}

export default App;
