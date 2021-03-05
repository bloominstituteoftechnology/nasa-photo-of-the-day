import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios'
import styled from 'styled-components'
import Ad from './Advertisment'
import { darkTheme, lightTheme } from './theme'
const FlexDiv = styled.div`

  display: flex;
  justify-content: space-between;

`;

const ArticleP = styled.p`

  text-align: center;
  align-items: center;
  font-size: 20px;
  color: black;
  width: 550px;
  padding: 25px;
  margin: 20px;
  border: none;
  background-color: lightgray;
  justify-content: center;

`;

const ImageAdjustment = styled.img`

  border: none;
  border-radius: 32px;
  padding: 20px;
  margin: 10px;
  width: 75%;

`;

export const Button = styled.button`

  border: none;
  padding: 5px;
  width: 150px;
  height: 60px;
  border-radius: 12px;
  background-color: blue;
  color: white;
  text-align: center;
  justify-content: center;
  align-items: center;

  &:hover{
    font-size: 20px;
    width: 190px;
    height: 80px;
    transition: 0.2s all ease-in-out;
  }

`;

export const AdButton = styled(Button)`

    background-color: orange;

`;

export const ThemeButton = styled(Button)`

    background-color: transparent;
    border: 0.4px solid black;
    color: black;

`;


function App() {
const [dailyImage, setDailyImage] = useState(true);

const BASE_URL = "https://api.nasa.gov/planetary/"
const API_KEY = 'C1fqRgcG5cp1VtQ8rKju45mWqlLQfQ25X1kPLmuM'

const [theme, setTheme] = useState('light')
const toggleTheme = () => theme === 'light' ? setTheme('dark') : setTheme('light')

  useEffect(() => {
axios.get(`${BASE_URL}apod?api_key=${API_KEY}`)
.then(res => setDailyImage(res.data.url)
) }, [dailyImage])


  return (
    <div className="App">

    <ThemeButton onClick={toggleTheme}>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</ThemeButton>

      <span>
      <h1 role="img" aria-label='go!'>Today's daily image is:</h1>
      <ImageAdjustment src={dailyImage} alt=''></ImageAdjustment>
      <h3>🚀 Nasa's 🚀 Daily 🚀 Image 🚀</h3>
      </span>

      <span>
      <Button>Link to Official Nasa Website!</Button>
      <h3>🚀 Nasa's 🚀 Daily 🚀 Article 🚀</h3>
      <FlexDiv>
      <Ad />
      <ArticleP>
        Today is a day of much more mystery, the sky is staring back. With the launch of Elon Musk's Space X rocket being able to reuse it's own fuel, to the discover of a possibility
        of life below our very feet. Ladies and gentlemen, the world is much more interesting than one might believe.
      </ArticleP>
      </FlexDiv>
      </span>

    </div>
  );
}

export default App;


