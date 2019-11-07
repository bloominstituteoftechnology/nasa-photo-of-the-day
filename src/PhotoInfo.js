import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const InfoDiv = styled.div`
  padding: 5% 10% 5% 10%;
`;

function PhotoInfo() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        setInfo(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log("The photo was not returned.");
      });
  }, []);
  return (
    <InfoDiv>
      <h2>{info.title}</h2>
      <p className="date">Date: {info.date}</p>
      <p>{info.explanation}</p>
    </InfoDiv>
  );
}

export default PhotoInfo;
