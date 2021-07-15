import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import Title from "./components/Title";
import Image from "./components/Image";
import Copyright from "./components/Copyright";
import Date from "./components/Date";
import Explanation from "./components/Explanation";
import "./App.css";

const MainDiv = styled.div`
max-width: 100%;
color: ${({theme}) => theme.primaryColor};
`
const H1 = styled.h1`
  background-color: ${({theme}) => theme.secondaryColor};
  margin: 0;
  padding: 3%;
`
const InfoDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 2%;
`

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14`)
    .then(res => {
      console.log(res.data)
      setData(res.data)
    })
    .catch(err => console.log(err))
  }, []);

  return (
    <MainDiv className="App">
      <H1>Astrological Photo of the Day</H1>
      <Title data={data}/>
      <Image data={data}/>
      <InfoDiv>
       <Date data={data}/>
       <Copyright data={data}/>
      </InfoDiv>
      <Explanation data={data}/>
    </MainDiv>
  );
}

export default App; 
