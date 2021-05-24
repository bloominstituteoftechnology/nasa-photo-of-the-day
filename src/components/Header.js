import React from 'react';
import styled from 'styled-components';

export default function Header(){
    return(
        <StyledHeader className='header'>
            <h1>
            Photo of The Day From NASA <span role="img" aria-label='go!'>🚀</span>!
            </h1>
        </StyledHeader>
    )
}

//style
const StyledHeader = styled.div`
    color: white;
    background-Color: black;
    margin: 0;
    transition: all 0.5s ease-in-out;
    &:hover{
        transition: all 0.5s ease-in-out;
        color: #198CD7;
    }
`;