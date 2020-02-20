import React, {useState, useEffect} from "react";
import Title from "./components/title";
import Img from "./components/img";
import Explain from "./components/Explain";
import Date from "./components/date"
import axios from "axios";
import styled from "styled-components";

import "./App.css";

const Background = styled.section`
background-image: url("https://images.unsplash.com/photo-1550039120-5d6529f0c4de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
background-color: red;
`;

const Footer = styled.p`
  color: white;
  background: black;
  padding: 2%;
  `

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(); 
  }, []);

  const fetch = () => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=D4OIdTxuBQNfCngsUEVY0h4eAnMQde0clqwVlgc9`)
    .then(response => {
        setData(response.data);
        console.log(response.data, " is response.data")
    })
    .catch(err => {
        console.log(`Error: ${err}`);
    })
  }
  
  console.log(data);

  return (
    <div className="App">
      <Background>
        <Date date={data.date}/>
        <Title title={data.title}/>
        <Img src={data.url}/>
        <Explain explain={data.explanation}/>
        <Footer>NASA Photo of the Day</Footer>
      </Background>
    </div>
  );
}

