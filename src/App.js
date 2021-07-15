import React, { useState, useEffect } from "react";
import axios from "axios";
import Photo from "./components/Photo";
import Search from "./components/Search";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes/index";
import "./reset.css"

function App() {

  const url = 'https://api.nasa.gov/planetary/apod?api_key=hbQeB0ODFwlwO5hu3xLYgmNfwQicougVUBPwVIdx';
  const [data, setData] = useState();
  const [date, setDate] = useState("")
  const [dark, setDark] = useState(true)
  
  const getData = async (url) => {
    try {
      const res = await axios.get(url);
      const picture = await res.data;
      console.log(picture)
      setData(picture);
    } catch(err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getData(url);
  }, []);
  useEffect(() => {
    getData(`${url}&date=${date}`);
  }, [date]);

  const StyledApp = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${props => props.theme.primeColor};
    color: ${props => props.theme.secondaryColor};
  `

  const StyledHeader =  styled.header`
    width: 100%;
    font-size: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem;
    padding: 1rem;
    h1 {
      text-decoration: underline;
    }
  `
  const StyledButton = styled.button`
    cursor: pointer;
    padding: 1rem;
    font-size: 1rem;
    border-radius: 1rem;
    border: 3px dotted gray;
    background-color: ${props => props.theme.primeColor};
    color: ${props => props.theme.secondaryColor};
  `
  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <StyledApp>
        <StyledHeader>
          <h1>Photo of the day:</h1>
          <StyledButton
          onClick={() => setDark(!dark)}>
            {dark ? "Dark" : "Light"}
          </StyledButton>
        </StyledHeader>
        <Search setDate={setDate}/>
        <Photo photo={data}/>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
