import React, { useState,useEffect } from "react";
import axios from "axios";
import CheckandLoad from './Components/CheckandLoad';
import "./App.css";

function App() {
  const [data,setData]=useState('');
  const [chosenDate,setChosenDate]=useState('2020-01-01');
  // const [chosenDate,setChosenDate]=useState('');
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    const fetchData=()=>{
    setLoading(true);
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=xP5hHMTZkcMEL8Vkrfa0cELocITNG25j6YP2e9m8&date=${chosenDate}`)
    .then(res=>{
      console.log(res.data);
      setData(res.data);
      setLoading(false);
    })
    .catch(err=>{
    console.log('Ops there is an error in axios call',err)
    })  
    }

    fetchData();
  },[chosenDate]); /* when to reload ? when the chosenDate changes!*/
  
  //Functions
  /*To update the ChosenDate in the axios call to the date from User*/
  function updateChosenDate(inputDate){
    setChosenDate(inputDate);
  }

  return (
    <div className="App" style={{margin:'0 auto', color:'indianred',backgroundColor:'black'}}>
      <h1>
        NASA Picture of the Day!<span role="img" aria-label='go!'>🚀</span>!
      </h1>
      <CheckandLoad 
      data={data}
      loading={loading}
      updateChosenDate={updateChosenDate}/>
    </div>
  );
}

export default App;
