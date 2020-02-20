import React from 'react';
import nasa from '../images/NASA_logo.svg.png'
import styled from 'styled-components'
import NASA1 from '../images/NASA1.jpg'
import Navigation from './Navigation'

const H1 = styled.h1`
 color: red;
 font-size: 3rem;
 padding: 3% 0;
`

const StyledImg = styled.img`
    width: 200px;
`
const StyledHeader = styled.header`
    background: url(${NASA1});
    background-size: cover;
`

const Header = (props) => {
    return (
        <StyledHeader>
          <StyledImg src={nasa}></StyledImg>
          <H1>NASA Photo Of The Day</H1>
          <Navigation/>
        </StyledHeader>
    );
};

export default Header;