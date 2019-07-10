import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';

function App() {
  const [data, setData] = useState({})
  const getData = () =>{
    axios.get("https://api.nasa.gov.planetary/apod?api_key=DEMO_KEY")
  .then(res => {
    console.log(res.data);
    setData(res.data);
  })
  .catch(err => {
    console.log(err, "error help sir")
  })
  }

  useEffect(getData, []);
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
