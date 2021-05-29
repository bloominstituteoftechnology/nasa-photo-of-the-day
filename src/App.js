
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./App.css";
import Header from './components/header'

import Details from './components/details'


function App() {
const [data, setData] = useState([])

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")       
     .then(res => {
       console.log(res.data) 

       setData(res.data)
        })
     .catch((err) => {
       debugger
       })
 }, []);


  return (
    <div className="App">

      <Header />
     
      <Details data={data}/>
    </div>
  );
}

export default App;