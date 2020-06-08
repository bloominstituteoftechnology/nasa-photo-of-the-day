import React, { useState, useEffect } from "react";
import { NasaCard } from "./NasaCard";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export default function NasaPhoto(props) {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=Cq2LeY2J2jVpRURbwuqcMMbyJQbCKyCxynPr6pPo`
      )
      .then((res) => {
        console.log("Response", res);
        setInfo(res.data);
      })
      .catch((error) => {
        console.log("We're sorry, the item you have requested has been lost in space", error);
      });
    }, []);
  
    return (
      <Container className="info">
        <NasaCard
          title={info.title}
          photo={info.url}
          copyright={info.copyright}
          date={info.date}
          explanation={info.explanation}
        />
      </Container>
    );
  }