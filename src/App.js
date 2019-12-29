import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Apod from './components/Apod';
import DateSelector from './components/DateSelector'
function App() {

  let today = new Date();
  today = `${today.getFullYear().toString} - ${(today.getMonth() + 1).toString().padStart(2,0)}-${today.getDate().toString().padStart(2,0)}`
  const [nasaPic, setNasaPic] = useState([])
  const [date, setDate] = useState(today)
  console.log(date)

  useEffect(() =>{
      axios

      .get(`https://api.nasa.gov/planetary/apod?api_key=3W71aKSRZ3K30XfwahyzfcW7OwWet76yFpTjobPk`)
      .then(response =>{
        
        setNasaPic(response.data)
        console.log(response.data)
      })
      .catch(err =>{
        // console.log('Please check error' + err)
      })
  },[date])

  const upddateDate = value =>{
    setDate(`${value.getFullYear().toString()}-${(value.getMonth()+ 1).toString().padStart(2,0)}-${value.getDate().toString().padStart(2,0)}`);
  };
  return (
    <div className="App">
      <DateSelector />
      <Apod title={nasaPic.title} explanation={nasaPic.explanation} imgUrl={nasaPic.hdurl} date={upddateDate}/>
      
    </div>
  );
}

export default App;
