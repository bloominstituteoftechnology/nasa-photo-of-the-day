import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import { BASE_URL, API_KEY} from './constants/key';
import Nasa from './components/Nasa';
import Footer from './components/Footer';
import Header from './components/Header';
import Pic from './components/Pic';




 function App() {
   const [nasa, setNasa] =useState([]);

  useEffect(() => {
    const fetchNasaData = () =>{
    axios.get(`${BASE_URL}${API_KEY}`)
    .then(res => {
      setNasa(res.data);
    })
    .catch(err => {
      debugger
    });
  }
  fetchNasaData();
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
