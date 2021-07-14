import React, { useState, useEffect } from "react";
import axios from "axios";
import Photo from "./Photo.js";
import "./App.css";

function App() {

  const url = 'https://api.nasa.gov/planetary/apod?api_key=hbQeB0ODFwlwO5hu3xLYgmNfwQicougVUBPwVIdx';
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
  const [data, setData] = useState();
  useEffect(() => {
    getData(url);
  }, []);
  console.log(data);
  return (
    <div className="App">
      <header>
        <h1>Photo of the day:</h1>
      </header>
      <Photo photo={data}/>
    </div>
  );
}

export default App;
