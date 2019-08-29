import React, { useState, useEffect } from "react";
import axios from "axios";
import Display from "./components/Didsplay/Display";
import styled from "styled-components";

const AppDiv = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  background-color: rgba(54, 11, 11, 0.938);
  color: #fff;
`;

function App() {
  const [data, setDate] = useState({});

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(res => {
        setDate(res.data);
      });
  }, []);

  return (
    <AppDiv>
      <Display
        imgSrc={data.url}
        title={data.title}
        description={data.explanation}
      />
    </AppDiv>
  );
}

export default App;
