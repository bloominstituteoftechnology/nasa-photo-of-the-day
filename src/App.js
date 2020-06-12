// IMPORTING FILES
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Photo from './components/photo.js';

// SAVING THE URI INTO VARIABLES FOR USE ANYWHERE AROUND THE APPLICATION
const BASE_URL = 'https://api.nasa.gov/planetary/apod'
const KEY = 'OetwTHvFINxpbd2AFdHbuUHEMTBEO1OL7QEAk787';

// SETTING THE API URI WITH REGISTERED API KEY
const nasaAPI = `${BASE_URL}?api_key=${KEY}`;

let today = new Date(); // CREATES THE DATE FOR TODAY
let dd = String(today.getDate()); // CONVERTS today variable TO DAY
let mm = String(today.getMonth() + 1); // CONVERTS today variable TO MONTH
let yyyy = today.getFullYear(); // CONVERTS today variable TO YEAR
today = yyyy + '-' + mm + '-' + dd; // CREATES DATE STRING FOR IMAGE QUERY. FORMAT: YYYY-MM-DD

function App() {
  var [dateSelected, setDateSelected] = useState(today); // SETS dateSelected variable TO TODAY'S DATE
  const [imageOfTheDay, setImageOfTheDay] = useState([]); // SETS imageOfTheDay variable TO TODAY'S IMAGE

  // SUBMITS DATE FOR IMAGE RETRIEVAL
  useEffect(() => {
    handleSubmit(dateSelected);
  }, [dateSelected]);

  const handleSubmit = event => {
    setApi(nasaAPI + '&date=' + dateSelected);
    //console.log('handleSubmit', api)
  };

  const [api, setApi] = useState(nasaAPI + '&date=' + dateSelected) // SETS GET VARIABLE date TO TODAY'S DATE FOR RETRIEVAL

  // RETRIEVES IMAGE BASED ON THE DATE SELECTED BY SETTING TARGET
  const handleChange = event => {
    setDateSelected(event.target.value);
    console.log('handleChange', dateSelected);
  };

  const setWidth = (width) => {
    return {
      div: {
        width:width,
        margin:'18px 20%'
      },
    }
  }

  const setButtonMargin = (margin) => {
    return {
      button: {
        margin:margin
      }
    }
  }

// RETRIEVES DATA OBJECT FROM NASA API
  useEffect(() => {
    axios.get(api)
      .then(response => {
        setImageOfTheDay(response.data);
        console.log('response: ', response)
      })
      .catch(error => {
        console.log('error: ', error);
      })
  }, [api])

  // RETURNS HTML FOR DISPLAY ON PAGE WITH VARIABLES THE DATA IS SAVED INTO
  return (
    <div className='App'>
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role='img' aria-label='go!'>🚀</span>!
      </p> */}

      {/* FORM IN HEADER TO CHANGE PHOTO OF THE DAY */}
      <div className="form-group" style={setWidth('60%').div}>
      <form onSubmit={handleSubmit}>
        <div className="row">
        <input className="form-control col-sm-7" type="date" onSubmit={handleSubmit} value={dateSelected} onChange={handleChange} /> {/* DISPLAYS CALENDAR */}
        <button className="form-control col-sm-4 btn-success" style={setButtonMargin('0 18px').button} type="submit" value="Submit" >Submit</button> {/* SUBMIT BUTTON */}
        </div>
      </form>
      </div>
      {/* RETRIEVES PHOTO OF THE DAY */}
      <Photo imageOfTheDay={imageOfTheDay} />
    </div>
  );
}

export default App;