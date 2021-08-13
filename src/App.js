import React, {useState, useEffect} from "react";
import "./App.css";
import styled from 'styled-components';
import axios from "axios";

function App() {
  const [dailyPic, setDailyPic] = useState('');
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=BZR4pKnRyIJnc6h8hTbL9z45MturqMMxyGLA7ovR`)
      .then(res => setDailyPic(res.data.hdurl))
      .catch(err => console.log(err));
  }, []);

  const MainContainer = styled.div`
    width: 90vw;
    height: 100%;
`;

  return (
    <MainContainer className='App'>
      <h1>NASA Picture of the Day</h1>
      <img src={dailyPic} alt='NASA APOD'/>
    </MainContainer>
  );
}

export default App;
