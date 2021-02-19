import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Header from "./Header/header.js"
import Content from "./content/content.js"

function App() {
  const [data, setData] = useState("hello")
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=uJQn0tBa1JAXC6tffc4FEFbPdd3WMonCbG3XPYH8')
    .then((res)=>{
      setData(res.data)
    })
    .catch()
  },[])
  return (
    <div className="App">
      {Header()}
      {Content({'data':data})}
    </div>
  );
}

export default App;
