import React, {useState, useEffect} from "react";
import "./App.css";
import Logo from './Logo';
import Image from './Image';
import Paragraph from './Paragraph';
import axios from 'axios';
import { API_KEY } from './secrets';
import Button from './Button';

import { ThemeProvider } from 'styled-components';
import theme from './theme';
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 100vh;
`

function App() {
  const [url, setUrl] = useState('')
  const [paragraph, setParagraph] = useState('')
    useEffect(() =>{
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(res => {
        setUrl(res.data.hdurl)
        setParagraph(res.data.explanation)
      })
      .catch(err => {
        console.error(err)
      })
    }, [])

  return (
    <ThemeProvider theme={theme}>
    <StyledDiv className="App">
      <Logo />
      <Image url={url}/>
      <Paragraph paragraph={paragraph}/>
      <Button btnText='Get Started' btnClass='cta-btn'/>
      <Button />
    </StyledDiv>
    </ThemeProvider>
  );
}

export default App;
