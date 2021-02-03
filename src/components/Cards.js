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

const SampleCard = styled.div`
  position: relative;
  height: 300px;
  width: 500px;
  background-color: red;
  margin-right: 75px;
  flex-shrink: 0;
`;

const SampleCards = React.memo(() =>
  Array(5)
    .fill(0)
    .map((_e, i) => <SampleCard key={`sampleCard-${i}`} />)
);


// END HORIZONTAL SCROLL



const Cards = () => {
    return (
        <>
            <HorizontalSection>
                <HorizontalScroll>
                    <CardsContainer>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        {/* <SampleCards /> */}
                    </CardsContainer>
                </HorizontalScroll>
            </HorizontalSection>
        </>
    )
}

export default Cards;