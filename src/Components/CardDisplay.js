import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "reactstrap";

import NasaCard from "./NasaCard";


 export default function CardDisplay() {
  const [cardInfo, setCardInfo] = useState([]);

  function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const randomDate = `${randomNum(2016, 2018)}-${randomNum(1, 12)}-${randomNum(
    1,
    28
  )}`;
  console.log(randomNum(2016, 2018));

useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=vONmFPwl8kgSNLKNFZ4bW5Xs5cS0XRMsCxFdzrVZ&date=${randomDate}`
      )
      .then(response => {
        console.log(response.data);
        setCardInfo(response.data);
      });
  }, []);

  return (
    <Container>
      <NasaCard
        key={cardInfo.url}
        title={cardInfo.title}
        date={cardInfo.date}
        imgUrl={cardInfo.url}
        explanation={cardInfo.explanation}
      />
    </Container>
  );
}

