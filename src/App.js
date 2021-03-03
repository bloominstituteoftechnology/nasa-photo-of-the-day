import React  from "react";
import "./App.css";
import axios from 'axios';
import { useEffect, useState } from "react";



function App() {
  const [todayPhotos, setTodayPhotos] = useState([]);
  useEffect(() =>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14`)
    .then(res =>{
      setTodayPhotos(res.data.hdurl)

    })
    .catch(err => console.log('something went wrong'))
  },[])












  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
