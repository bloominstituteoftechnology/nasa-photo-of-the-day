import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const SpaceDiv = styled.div`
  margin: 0 auto;
  width: 800px;
  height: 800px;
`

const ImgTitle = styled.h1`
  border-bottom: 1px solid black;
  width: 800px;
`

const SpaceImg = styled.img`
  width: 800px;
  height: 800px;
`

const ImgDate = styled.p`
  margin: 10px;
  color: grey;
`

export default function SpaceCard() {
    const [cards, setCards] = useState("")
    console.log(cards)

    useEffect(() => {
        axios
          .get(`https://api.nasa.gov/planetary/apod?api_key=eccuofTscc4oNyjRB6AamIcZm8k43l3eZQmlU0UB`)
          .then(response => {
            console.log(response);
            setCards(response.data);
          })
          .catch(error => {
            console.log(`The error was: ${error}`);
          });
    }, []);
    
    return (
        <SpaceDiv className="card-container">  
            <ImgTitle>{cards.title}</ImgTitle>
            <SpaceImg src={cards.url} />
            <ImgDate>{cards.date}</ImgDate>
        </SpaceDiv>
    );
}