import React, { useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";

function App() {

  const [imgSrc, setImgSrc] = useState("");
  // const [data, setData] = useState([]);

  useEffect(() => {
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=zHixeT7Pa2hNqzpzqKAikorH9xVrquOCZi5oxrW5`)
  .then(res => {
    console.log(res)
    setImgSrc(res.data)
  }) .catch(err => {
    console.log(err);
  });
  // return function () {
  //   console.log('cleanup');
  // }
}, []);
  
  return (
    <div className="App">
      {imgSrc.map()}
      <h1>NASA Photo Of the Day!</h1>
      <img alt="NASA Photo Of the Day!" src={imgSrc} />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
