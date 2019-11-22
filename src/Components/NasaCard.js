import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaCardLink from "./NasaCardLink"

const NasaCard = () =>{ 
const [cards, setCards]= useState({});
useEffect(()=>{
    axios
      .get
      ("https://api.nasa.gov/planetary/apod?api_key=TcgxyoP6xY2kCPQZ1dI9Dx67QU9oCcV89SaF0VO0")
      .then(response => {
        const cards = response.data;
        console.log(response);
        setCards(cards);
      })
      .catch(error => {
        console.log("Sorry, you've got an error", error)
      });
  }, []);
  return (
    
      <NasaCardLink
        key={cards.url}
        title={cards.title}
        date={cards.date}
        url={cards.url}
        explanation={cards.explanation}
        />
  );
}

export default NasaCard;
