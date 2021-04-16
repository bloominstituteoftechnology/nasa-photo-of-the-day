import React from 'react'
import styled from 'styled-components';

export default function Header() {

const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 5%;
    height: 150px;
    color: green;
    text-align: center; 
    background:
        linear-gradient(red, transparent),
        linear-gradient(to top left, purple, transparent),
        linear-gradient(to top right, blue, transparent);
        background-blend-mode: screen;
  `;

const HeaderSectionH1 = styled.h1`
  
    font-family: sans-serif;
    font-size: 2rem;
    font-weight: bold;
`;

const HeaderSection = styled.section`
    text-align: center;
`;
    return(
    <Header>
        <HeaderSection>
        <HeaderSectionH1>  NASA IMAGE </HeaderSectionH1>
        </HeaderSection>
    </Header>
    )
};