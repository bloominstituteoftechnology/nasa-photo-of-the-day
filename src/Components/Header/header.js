import React, {useState, useEffect} from "react";
import styled from "styled-components"

const Header = (props) => {
    return (
        <StyledHeader>
        <div className="main">
            <h1>EPIC NASA PAGE</h1>
            <nav>
                <a href="#">About</a>
                <a href="#">Api's Used</a>
                <a href="#">Contact</a>
                <a href="#">Other</a>
            </nav>
        </div>
        </StyledHeader>
    )
}

export default Header


const StyledHeader = styled.div`
    color: yellow;
`;