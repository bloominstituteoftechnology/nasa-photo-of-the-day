import React, {useState, useEffect} from "react";
import "./App.css";
import Picture from './Picture'
import Body from './Body'
import axios from 'axios'
import Header from './Header'
import styled from 'styled-components'
import Date from './DateInput'

const StyledBody = styled.div`
  padding: 0;
  background: #f7f7f7;
`

function App() {
  const [nasaData, setNasaData] = useState([])

  const changeDate = e => {
      e.preventDefault();
      console.log(e.target);
  }
  
  useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=asy7YloHliKheX3kKzh4LYH6oMJL7Wkv4aYdvB9C')
      .then( res => {
        setNasaData(res.data)
      }).catch(err => {
        debugger
      })
  }, [])
  console.log(nasaData)
  return (
    <StyledBody className="App">
      <Header/>
      <
      <Picture data={nasaData}/>
      <Body data={nasaData}/>
    </StyledBody>
  );
}

export default App;
