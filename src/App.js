import React, {useEffect, useState} from "react";
import "./App.css";
import axios from 'axios'
import Post from './components/Post'
import { Button } from 'reactstrap';
import NavBar from "./components/NavBar";

const API_KEY = `S4BSTHbyAzZp4XrreYaSUMkFEq1O7jPL0efEZT4B`;
const baseURL = `https://api.nasa.gov/planetary/apod?api_key=S4BSTHbyAzZp4XrreYaSUMkFEq1O7jPL0efEZT4B`

function App() {

  const [currentDate, setCurrentDate] = useState({});

  useEffect(() =>{
    const fetchPhoto = () =>{
      axios.get(`${baseURL}`)
      .then(res => {
        setCurrentDate(res.data)
      })
      .catch ( err =>{
        console.log(err)
      })
    }
    fetchPhoto();
  },[])

  return (
    <div className="App">
      <NavBar setCurrentDate={setCurrentDate} url={baseURL} />
      <Post url={currentDate.url} data={currentDate} setCurrentDate={setCurrentDate} />     
    </div>
  );
}

export default App;
