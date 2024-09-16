import React, { useState, useEffect } from "react";
import axios from 'axios';
import "../App.css";
import NasaPhoto from './body.js';
import styled from 'styled-components';

const StyledDiv = styled.div `
  background-color: ${prop => prop.theme.primaryColor};
`

function App() {
  const [data, setData] = useState();

  useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=Xsn9wVhGQ9rMIctIluKE6FVW4QaNInk9gNWbB4jR')
      .then(res => {
        console.log(res.data);
          setData(res.data)
      })
      .catch(err => console.error(err));
  }, []);
  
  
    return (
    <StyledDiv className="App">
      { data && <NasaPhoto photo = {data} /> }
    </StyledDiv>
  );
}

export default App;
