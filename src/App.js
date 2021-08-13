import React, {useState, useEffect} from "react";
import "./App.css";
import styled from 'styled-components';
import Date from './Components/imgDate';
import Explanation from './Components/Explanation';
import Title from './Components/Title';
import axios from "axios";


const Page = styled.div`
  background-color: lightgray;
  color: white;
  width: 100vw;

  h1 {
    text-shadow: 2px 2px purple;
  }
`
const NasaImg = styled.img`
    // border: 10px solid purple;
    border-radius: 10px;
    width: 500px;
    height: 400px;
    `

function App() {
  const [NasaData, setNasaData] = useState('');
  const [DailyPic, setDailyPic] = useState('');

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=BZR4pKnRyIJnc6h8hTbL9z45MturqMMxyGLA7ovR`)
      .then(res => {
        console.log(res.data)
        setNasaData(res.data)
        setDailyPic(res.data.hdurl)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  

  return (
    <Page className='App'>
      <h1>Nasa Photo of the Day</h1>
      <Date date={NasaData.date}/>
      <NasaImg src={DailyPic} alt='NASA APOD'/>
      <Title title={NasaData.title}/>
      <Explanation explanation={NasaData.explanation}/>

    </Page>
  );
}

export default App;
