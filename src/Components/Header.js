import React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components'

const StyledHeader = styled.div`
    background-color: #ADD8E6;
    padding: 5%;
    margin: 4%;
    border-radius: 8px;
    box-shadow: 0px 1px 6px -2px #807f7f;

    h1 {
        font-size: 4.5em;
        color: #778899;
    }
`

export default function Header () {

    return (
        <StyledHeader>
            <h1>NASA Picture of the Day</h1>
            <NavBar />
        </StyledHeader>
    );
}