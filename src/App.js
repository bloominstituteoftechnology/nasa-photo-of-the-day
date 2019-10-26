import React, {useState, useEffect} from "react";
import axios from "axios"
import styled from "styled-components";
import Head from "./Components/Head"


const Background = styled.div`
    margin: 0 auto;
    width: 80%;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SiteTitle = styled.h1`
    color: white;
`;

function App() {
  const [nasaImg, setNasaImg] = useState([]);
  useEffect(() => {
    
    axios.get("https://api.nasa.gov/planetary/apod?api_key=HeJ9yb3WaxSY1faBvrEJLfH4brmlYkRaYxo3eOPK")
    .then(res => {
      console.log(res.data);
      setNasaImg(res.data);
    });

  }, []);

  return (
    <Background>
      <header><SiteTitle>NASA PHOTO OF THE DAY</SiteTitle></header>
      <Head title={nasaImg.title} url={nasaImg.hdurl} explanation={nasaImg.explanation} date={nasaImg.date} /> 
    </Background>
  );
}

export default App;