import React, { useState, useEffect} from "react";
import "./App.scss";
import axios from "axios";
import AppCard from './components/AppCard'
import styled from "styled-components";

function App() {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [PotD, setPotD] = useState();
  const [desc, setDesc] = useState();
    
  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=8JITPnChVRiIiMatNQuwh7UtkzqbqRUcR3L6WXlu')
      .then(response => {
        console.log(response);
        setTitle(response.data.title);
        setDate(response.data.date);
        setPotD(response.data.url);
        setDesc(response.data.explanation);
      })
      .catch(error => {
        console.log('The Data was not returned!', error);
      })
  }, [])

  return (
      <div className="App">
        <SiteTitle>Photo of the Day!</SiteTitle>
        <CardContainer>
          <AppCard title={title}
            date={date}
            PotD={PotD}
            desc={desc}/>
        </CardContainer>
      </div>
    );
}

const CardContainer = styled.div`
  width: 90%;
  background-color: lightgrey;
  border-radius: 1.5rem;
  margin: 0 auto;
  padding: 1.5rem 0;
`;
const SiteTitle = styled.h1`
  font-size: 5.5rem;
  color: #686194;
`;

export default App;
