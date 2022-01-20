import React from "react";
import styled from 'styled-components';

const StyledHeader = styled.div`
display: flex;
justify-content: space-evenly;
background-color: gray;
`


const Header = props => {
    const { photo } = props

    return (
        <StyledHeader className="header">
            <h1>{photo.title}</h1>
            <h3>{photo.date}</h3>
        </StyledHeader>
    )
}

export default Header;


// display: flex;
// justify-content: space-evenly;
// background-color: gray;