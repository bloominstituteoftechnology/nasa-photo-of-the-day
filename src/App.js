import React, {useState, useEffect} from "react";
import axios from 'axios'
import Header from './Components/Header'
import Container from './Components/Container'
import "./App.css";

function App() {
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=xfvQms5mLeM3dN1rIaumNprPgH8ZObSOBrjTuDGP')
    .then((res) => {
      console.log(res.data)
      setNasaData(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <div className="App">
      <Header data={nasaData}/>
      <Container data={nasaData} />
    </div>
  );
}

export default App;
