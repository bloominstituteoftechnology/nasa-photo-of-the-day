import React, {useState, useEffect} from "react";
import axios from 'axios'
import "./App.css";

function App() {
  const [info, setInfo] = useState([])

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=iuZ0MCtSF5sDdt8apQEPwg3AxliAa6jSz22qjzTz')
    .then(res => {
      console.log(res.data)
      setInfo(res.data)
    })
    .catch(err => {
      debugger
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
