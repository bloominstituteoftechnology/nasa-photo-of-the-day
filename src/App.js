import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import Photo from './components/photoComponent'
import "./App.css";

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-08-27")
    .then(( response => {
      setData(response.data)
      console.log(response)
    }))
  }, [])
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Photo title={data.title} hdurl={data.hdurl}/>
    </div>
  );
}

export default App;
