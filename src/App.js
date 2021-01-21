import React, { useState, useEffect } from "react";
import HeaderBar from "./components/HeaderBar/HeaderBar"
import Display from "./components/Display/Display"
import axios from "axios";
import "./App.css";
import { BASE_URL, API_KEY } from "./constants/index";

function App() {

const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        setData(res.data)
      })
      .catch(error => console.log(error))
  }, []);
  
  return (
    <div className="App">
      <HeaderBar data={data}/>
     
      <Display data={data}/>
    </div>
  );
}

export default App;
