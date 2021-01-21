import React, { useState, useEffect } from "react";
import HeaderBar from "./components/HeaderBar/HeaderBar"
import Display from "./components/Display/Display"
import axios from "axios";
import "./App.css";
import { BASE_URL, API_KEY } from "./constants/index";

function App() {

const [data, setData] = useState("test")

  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        setData(res.data)
        console.log(res.data.title)
      })
      .catch(error => console.log(error))
  }, []);

const HeaderTest = (props) => {
  return <div> </div>
}
  
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <HeaderBar data={data}/>
      <HeaderTest />
      <Display data={data}/>
    </div>
  );
}

export default App;
