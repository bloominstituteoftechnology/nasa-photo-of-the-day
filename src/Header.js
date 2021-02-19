import React from 'react'
import styled from 'styled-components';

export default function Header() {

const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    height: 100px;
    background-color: #0093D2;
    color:white;
    text-align: center; 
  `;

const HeaderSectionH1 = styled.h1`
    @import url(
        'https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
    font-family: 'Montserrat', sans-serif;
    font-size: 2rem;
    font-weight: bold;
`;

const HeaderSection = styled.section`
    text-align: center;
`;
    return(
    <Header>
        <HeaderSection>
        <HeaderSectionH1> AMAZING NASA IMAGERY</HeaderSectionH1>
        </HeaderSection>
    </Header>
    )
};