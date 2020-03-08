import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    h1{
        font-size: 40px;
        color: blue;
    }
    h3{
        font-size: 32px;
        color: blueviolet;
    }
`

function Header(props) {
    return (
        <StyledDiv>
            <h1 className="title">{props.title}</h1>
            <h3 className="date">{props.date}</h3>
        </StyledDiv>
    )
}

export default Header;

