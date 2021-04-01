import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {

  const url = 'https://api.nasa.gov/planetary/apod?api_key=hbQeB0ODFwlwO5hu3xLYgmNfwQicougVUBPwVIdx';
  const getData = async (url) => {
    try {
      const res = await axios.get(url);
      const picture = await res.data;
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
      <img href={data.url}></img>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
