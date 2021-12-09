import React, { useState } from "react";
import "./App.css";
import Apod from './ApodDisplay'
import DateSelector from './DateSelector'
import PastApod from "./PastApod";
import styled from 'styled-components'

const HeaderWrapper = styled.header`
    text-align: center;
    margin: 4% 20% 5% 20%;

    h1{
  font-style: italic;
  font-size: 7rem;
  margin-bottom: 2%;
  /* text-shadow: 2px 2px #4f4f4f; */
  color: rgba(0,0,0,0.6);
  text-shadow: 3px 3px 3px rgba(0,0,0,0.5);
}
    
`

function App() {

  const [today, setToday] = useState(true)
  const [date, setDate] = useState('')
  
  return (
    <div className="App">
      <HeaderWrapper>
        <h1>NASA APOD</h1>
        <h2>Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</h2>
      </HeaderWrapper>
      {today ? <Apod /> : <PastApod date={date} />}
       <DateSelector setDate={setDate} setToday={setToday} />
      
    </div>
    
  );
}

export default App;
