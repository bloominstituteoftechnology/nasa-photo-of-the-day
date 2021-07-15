import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import { BASE_URL, API_KEY} from './constants/key';



 function App() {
   const [nasa, setNasa] =useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}${API_KEY}`)
    .then(res => {
      setNasa(res.data)
    })
    .catch(err => {
      debugger
    })
  }, []);

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
