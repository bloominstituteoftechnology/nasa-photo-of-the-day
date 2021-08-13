import React, {useState, useEffect} from "react";
import "./App.css";
import styled from 'styled-components';
// import imgDate from './Components/image-info';
import axios from "axios";


const Page = styled.div`
  width: 90vw;
`

function App() {
  const [NasaData, setNasaData] = useState('');

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=BZR4pKnRyIJnc6h8hTbL9z45MturqMMxyGLA7ovR`)
      .then(res => {
        console.log(res.data)
        setNasaData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <Page className='App'>
      <h1>Nasa Photo of the Day</h1>
      
    </Page>
  );
}

export default App;
