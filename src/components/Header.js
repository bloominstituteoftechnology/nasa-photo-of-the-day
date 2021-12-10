import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
    text-transform: uppercase;
    margin: 0 5% 0 5%;
`

const Header = props => {
    const { data } = props;
    return (
        <StyledHeader>
            <h1>🪐 NASA  Astronomy Photo of the Day:</h1>
            <h2>{data.title}</h2>
        </StyledHeader>
    )
}

// Contains a title and is located at the top of the page

export default Header;