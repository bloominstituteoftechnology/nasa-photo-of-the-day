import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";
import Photo from './Components/Photo';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  CardColumns, Alert, Button
} from 'reactstrap';

function App() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(6);
  const fetchData = () =>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count='+ count)
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
         <Alert color="dark"><h1>Here are some cool Photos and Facts:</h1></Alert>
         <br/>
         <CardColumns>
         {data.map((element)=>{
           return <Photo hdurl={element.hdurl} explanation={element.explanation} copyright ={element.copyright} date ={element.date}/>
         })}
        </CardColumns>
    </div>
  );
}

export default App;
