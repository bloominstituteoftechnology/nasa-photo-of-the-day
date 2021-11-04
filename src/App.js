import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';


function App() {

  const [data, setData] = useState({})

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=eTrXJWNJbEO2imxXzXwu0tfUeX9iMsUo4FdjjYby')
    .then(res => {
    console.log(res.data);
    })
    .catch(err => {
      console.error(err);
    })
  }, [])
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <img src={data.url} alt={data.title}/>
    </div>
  );
}

export default App;
