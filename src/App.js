import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';
import Data from "./nasaComponents/Data"
import Picture from "./nasaComponents/Picture"
import styled from 'styled-components';

const Sky = styled.div`
  background-color: skyblue;
`

function App() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=XSOKS0NvU6SHjsuq9Zwrf8JhwWfFU7xqx5dRMQfs')
      .then(response => {
        console.log("success", response)
        setInfo(response.data);
      })
      .catch(error => console.log("failure", error))
  }, [])

  return (
    <div className="App">
      <Sky className="Body">
      <span role="img" aria-label='go!'>🚀</span>
        <Picture data={info}/>
        <Data data={info}/>
      </Sky>
    </div>
  );
}

export default App;
