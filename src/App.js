import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';

function App() {
  const [nasaData, setNasaData] = useState([]);

  useEffect(()=> {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=MjOoXMh2ahiorGCM7YMmKlPo88UBehPSatVjdv8i")
    .then((res)=>{
      setNasaData(res.data);
      console.log(res.data);
    })
    .catch((err)=> {
      console.log(err);
    })
  }, [])
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
