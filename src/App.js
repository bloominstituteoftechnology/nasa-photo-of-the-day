import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BASE_URL, API_KEY, DATE } from "../src/constants/index";
import Header from "./components/header";
import styled from "styled-components";

function App() {
  const [picture, setPicture] = useState([]);
  const [info, setInfo] = useState([]);
  const [title, setTitle] = useState([]);
  const [date, setDate] = useState([]);
  const header = useState();
  
  useEffect(() => {
    const fetchData = () =>{
    axios
    .get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}&date=${DATE}`)
    .then((res) => {
      setPicture(res.data.hdurl);
      setInfo(res.data.explanation);
      setTitle(res.data.title);
      setDate(res.data.date);
      // console.log(res.data.hdurl)
    })
    .catch((err) => {
      console.log(err);
    });
    };
    fetchData();
  }, []);

  
  return (
    <StyledApp>
      <div className="App">
        {/* <p>
          Read through the instructions in the README.md file to build your NASA
          app! Have fun <span role="img" aria-label='go!'>🚀</span>!
        </p> */}
        <Header header = {header}/>
        <div className="big">
        <div className="left">
          
          <img src={picture} alt="picture of the day"/> 
        </div> 

        <div className="info"> 
        <h2>{title}</h2>
          <h4>{date}</h4> 
          <p>{info}</p>
        </div>
        </div>
      </div>
    </StyledApp>
  );
}


const StyledApp = styled.div`
background-color:white;
  .App{
    color:darkseagreen;
    background-color:white;
    margin: auto;
    width:95%;
    font-family:"karla";
    padding-bottom:10%;
    font-size:1.2rem;
    /* border:2px black solid; */
  } 
  
  /* *{
    
  } */

  .big{
    display:flex;
    flex-direction:row;
  font-style:arial;
  /* border:5px black solid; */
  }
  .left{
    margin:auto;
    width:45%;
    display:flex;
    flex-direction:column;
  }
  .info{
    width:40%;
    margin:auto;
    display:flex;
    flex-direction:column;
    align-items:center;

    /* font-family:; */
  }
  h4{
    color:darkseagreen;
    margin-top:.5px;
  }
  h2{
    margin-bottom:.5px;
    color:darkseagreen;
    font-family: "papyrus";
    font-size:2rem;
    &:hover{
      font-size:2.2rem;
      color:darkolivegreen;
    }
  }
  
  img{
    margin:auto;
    width:100%;
    border: 2px #1c1c1c solid;
    border-radius:10%;
    margin-top:2%;
  }
`

export default App;
