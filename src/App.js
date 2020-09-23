import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";
import Photo from './Components/Photo';

function App() {
  const [data, setData] = useState([]);
  const fetchData = () =>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-09-22')
      .then(
        (response)=>{
          setData(response.data);
          console.log(response.data);
        }
      )
  }
  useEffect(fetchData, []);
  return (
    <div className="App">
        <Photo hdurl={data.hdurl} explanation={data.explanation} copyright ={data.copyright} date ={data.date}/>
    </div>
  );
}

export default App;
