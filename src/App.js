import React, {useState, useEffect} from "react";
import axios from 'axios';
import Photo from './components/Photo'
import "./App.css";

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-08-27")
    .then(( response => {
      setData(response.data)
    }))
  }, [])
  return (
    <div className="App">
        <Photo title={data.title} hdurl={data.hdurl}/>
    </div>
  );
}

export default App;
