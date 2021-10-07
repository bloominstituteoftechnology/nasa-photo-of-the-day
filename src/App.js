import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import styled from 'styled-components'


const imgStyle = styled.div`


`



function App() {
  const [apiData, setApiData] = useState([])



  useEffect(() => {
   axios.get(`https://api.nasa.gov/planetary/apod?api_key=7YnANaDwNEdTS4uqUbwoDkDAcAHvtMIxYmL33f68`)
   .then(resp => {
     console.log(resp.data);
     setApiData(resp.data);
   }).catch(err => {
     console.error(err)
   })
  }, [])


  





  return (
    <div className='App'>
      <Header/>
      <h2> {apiData.copyright}</h2>
      <input type="date" />
      <p>
      <img src={`${apiData.url}`} alt="img" />
      </p>
      <h3>
      {apiData.date}
      </h3>
      <p>
        {apiData.explanation}
      </p>
      </div>
      
    
  );
}

export default App;
