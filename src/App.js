import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import Header from './Header/header'
import Container from "./Container/container"

function App() {
  const [data, setData] = useState('Test')
  useEffect(() =>{
    axios
    .get(("https://api.nasa.gov/planetary/apod?api_key=xfvQms5mLeM3dN1rIaumNprPgH8ZObSOBrjTuDGP"))
    .then((res) =>{
      console.log(res.data)
      setData(res.data)
    })
    .catch((err) =>{
      console.log(err)
    })
  },[])
  return (
    <div className="App">
      {Header()}
      {Container({'data':data})}
    </div>
  );
}

export default App;
