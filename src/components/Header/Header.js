import React from "react";
import "./Header.css";
import styled from "styled-components";

const HeaderStyle = styled.h1`
color: blue;
`;
const Header = () =>{
    return(
        <div>
            <HeaderStyle>Nasa Photo of the Day</HeaderStyle>
        </div>
    )
}

export default Header;