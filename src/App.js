import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import "./App.css";
import axios from"axios"
import Photo from"./photo"
import Para from"./para"
import Title from"./title"
import Footer from"./Footer"

function App() {
  const [details, setDetails] = useState([])

  useEffect(()=> {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=uptwa3GqYp2nlUdtNa7h2UO3nmQT8pBdgxWiU0Me`)
      .then(res => {
        setDetails(res.data)
      })
      .catch( err => {
        console.log(err);
      })
  }, [])


  const Mystyle = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Mulish&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;900&display=swap');
  body
  {
    width: 80vw;
  }
  h1{
    font-size:3rem;
    font-weight:900;
    font-family: 'Mulish', sans-serif;
    margin:5%;
   

  }
  .imgPara {
    display:flex;
  }
  .imgPara img{
      height: 100vh; 
  }
  .imgPara p{
    font-size:1.5rem;
    text-align:center;
    margin:50px;
    font-weight: 400;
    font-family: 'Mulish', sans-serif;
  }
  @media screen and (max-width: 600px){
  .imgPara {
    flex-direction: column;
  }
  .imgPara img{
    height: auto; 
    width:100vw;
}
}
  `

  return (
    <Mystyle className="App">
      <div className="imgPara">
        <Photo help={details}/>
        <div>
        <Title data={details}/>
        <Para data={details}/>
        <Footer data={details}/>
        </div>
     
      </div>
      
    </Mystyle>
  
  );
}

export default App;
