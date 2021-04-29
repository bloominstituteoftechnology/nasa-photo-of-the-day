import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
// import Picture from '../src/components/Picture';

function App() {
  const [data, setData] = useState({});

useEffect(()=>{
  getNasaPicture()
  
  async function getNasaPicture(){
    try{
      const {data} = await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    }
  }
})

  return (
    <div className="App">
      <h1> Nasa OPAD</h1>
      <h4>Made by: Steve Rivera</h4>
      {/* <Picture data ={data}/> */}
    </div>
      );

  };
export default App;
