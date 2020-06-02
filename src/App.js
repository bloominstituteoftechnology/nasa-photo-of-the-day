import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Title from './components/title/title'
import MainContent from "./components/mainData/mainData";


 
function App() {

  const [data, setData] = useState({})

  useEffect(() =>{
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=EvJe9bhBvKRMo5A6NUreVJrUGAmDfYWXcPvWZTUX')
    .then(response =>{
      // console.log(response.data)
      setData(response.data)
    }) 
  },[]);
  console.log(data, 'this is data app')

  return (
    <div className="App">
      <h1 className='header'>NASA: Astronomy Picture of the Day</h1>
      <Title titleArray = {data}/>
      <MainContent dataArray = {data}/>
    </div>
  );
}

export default App;
