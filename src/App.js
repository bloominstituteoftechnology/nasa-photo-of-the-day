import React, {useState, useEffect} from "react";
import "./App.css";
import { API_URL, API_KEY } from './configuration/config';
import axios from 'axios';
import Picture from './Picture';
import Explanation from './Explanation';

import styled from 'styled-components';

const StyledApp = styled.div`
  color: ${props => props.theme.primaryColor};
  border: ${props => props.theme.border};
  margin: 30px;
  padding: 20px;
`
const StyledH1 = styled.h1`
  &:hover {
    border-radius: 20px;
    color: white;
    background: ${props => props.theme.primaryColor};
    transition: all 0.5s ease-in-out;
  }
  transition: all 0.5s ease-in-out;
`



function App() {
  const [picData, setPicData] = useState({});

  useEffect(() => {
    const getPicData = () => {
      axios.get(`${API_URL}?api_key=${API_KEY}`)
      .then(res => {
        console.log(res);
        setPicData({...res.data});
      })
      .catch(err => {
        debugger;
      });
    };
    getPicData();

  }, []);

  return (
    <StyledApp className="App">
      <StyledH1>Cynthia's Astronomy Picture of the Day</StyledH1>
      <Picture picData={picData}/>
      <Explanation explanation={picData.explanation}/>
      

      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
    </StyledApp>
  );
}

export default App;
