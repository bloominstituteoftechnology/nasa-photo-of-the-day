import React, { useEffect, useState} from "react";
import "./App.css";
import axios from 'axios'
import {Card} from './Card'
import Header from "./Header";
function App() {
  const [details, setDetails] = useState([])
  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=ElqWJ9fKhR1CHz66c8aNCTXkFdBpGZg6fT4XsoF3&start_date=2021-12-01&end_date=2021-12-07').then((resp)=>{
      console.log(resp.data)
      setDetails(resp.data)
    })
  }, [])
  return (
    <div className="App">
      <Header/>
      {details.map(obj =>{
      return <Card data={obj}/>
      })}
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
