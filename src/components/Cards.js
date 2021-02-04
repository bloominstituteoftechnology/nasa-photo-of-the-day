import React from 'react'
import Card from './Card'

// HORIZONTAL SCROLL


import styled, { createGlobalStyle } from "styled-components";

import HorizontalScroll from "../horizontal-scroll";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: sans-serif;
  }
`;

const Main = styled.main``;

const HorizontalSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  /* background-color: pink; */
`;

const BumperSection = styled.section`
  text-align: center;
  padding: 128px 16px;
  /* background-color: skyblue; */
`;

const CardsContainer = styled.div`
  position: relative;
  height: 100%;
  padding: 0 0 0 150px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  /* background-color: yellow; */
`;



// END HORIZONTAL SCROLL



const Cards = ({ setView }) => {
    return (
        <>
            <HorizontalSection>
                <HorizontalScroll>
                    <CardsContainer>
                      <Card setView={setView} />
                      <Card setView={setView} />
                      <Card setView={setView} />
                      <Card setView={setView} />
                      <Card setView={setView} />
                    </CardsContainer>
                </HorizontalScroll>
            </HorizontalSection>
        </>
    )
}

export default Cards;