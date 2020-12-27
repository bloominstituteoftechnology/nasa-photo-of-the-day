import React, { useEffect, useState } from "react";
import axios from "axios";
import {DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import red from "@material-ui/core/colors/red";
import lime from "@material-ui/core/colors/lime";
import DateFnsUtils from '@date-io/date-fns';
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import "./App.css";
import logo from "./logo/NASA_logo.svg"
import InfoCard from "./InfoCard"
import styled from 'styled-components';

const phDate = new Date();
const dateFormat = phDate.getFullYear()+'-'+(phDate.getMonth()+1)+'-'+phDate.getDate();
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



const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: red,
    secondary: lime
  },
});

function App() {
  const [state,setState] = useState({});
  const [selectedDate, handleDateChange] = useState(new Date());
  useEffect( () => {
    axios.get(`${URL}&date=${dateFormat}`)
        .then( res => {
            console.log(res.data);
            setState(res.data)   
        })
        .catch(err => err);
            },[])
  return (
    <Body className="App">
      <img src={logo} alt="official nasa logo"></img>
      <Header>Astronomy Photo of the Day</Header>
      <InfoCard
     title = {state.title}
     date = {state.date}
     photo = {state.url}
     caption = {state.explanation}
     
     />
     
      <ThemeProvider theme={defaultMaterialTheme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
          type = 'input'
          variant ="inline"
          disableFuture='true'
          format="yyyy/MM/dd"
          label = " Date Picker"
          value={selectedDate}  
          onChange={handleDateChange}
          />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
    </Body>
  );
}

export default App;
console.log(dateFormat)