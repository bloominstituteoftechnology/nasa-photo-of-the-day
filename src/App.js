import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import logo from "./logo/NASA_logo.svg"
import InfoCard from "./InfoCard"
import styled from 'styled-components';
import { format } from 'date-fns'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const URL = 'https://api.nasa.gov/planetary/apod?api_key=cpIVh1n5cT7gdxurNPJfIw7fYEakx1I89h1UEoYT';


const Body = styled.div`
    background-color: #000;
    padding: 1rem;
    color: #fff;
`;

const Header = styled.h1`
font-size: 3rem;
text-align: center;
font-weight: 700;
text-transform: uppercase;
background-color: #0B3D91;
padding: 2rem 0.1rem; 
`;

function App() {
  
  const [state,setState] = useState({});
  const [startDate, setStartDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  
  useEffect( () => {
    axios.get(`${URL}&date=${startDate}`)
        .then( res => {
            console.log(res.data);
            setState(res.data)   
        })
        .catch(err => err);
            },[startDate])
  return (
    <Body className="App">
      <img src={logo} alt="official nasa logo"></img>
      <Header>Astronomy Photo of the Day</Header>
      <InfoCard
     title = {state.title}
     date = {  <DatePicker
      selected={new Date()}
      onChange= { 
        date => { const newDate = format( date , 'yyyy-MM-dd')
        setStartDate(newDate)} }
      label = " Date Picker"
      maxDate = {new Date()}
      value = {startDate}
      />}
     
     photo = {state.url}
     caption = {state.explanation}
     
     />
   

    
    </Body>
  );
}

export default App;
// console.log(getDate)