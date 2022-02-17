import React, {useState, useEffect} from "react";
import axios from "axios";

import "./App.css";

import NasaVideo from "./components/NasaVideo";



function App() {

 const [data, setData] = useState();

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=8rUpNRuH6Hi3iPBzRPevAvnMFrKj8m6HMQYLUxVD`)
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      { data && <NasaVideo video={data} /> }
    </div>
  );
}

export default App;
