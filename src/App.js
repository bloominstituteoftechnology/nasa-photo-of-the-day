import React, {useState, useEffect} from "react";
import "./App.css";
import styled from 'styled-components';
import Date from './Components/imgDate';
import axios from "axios";


const Page = styled.div`
  width: 90vw;
`
const NasaImg = styled.img`
    width: 300px;
    height: 300px;
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

    </Page>
  );
}

export default App;
