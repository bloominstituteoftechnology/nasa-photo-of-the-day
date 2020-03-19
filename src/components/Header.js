import React from "react";
import styled from 'styled-components';

const HeaderContainer = styled.div`
background-color: #7a0043;
color: white;
`
function Header(){
    return(
    <HeaderContainer>
        <h1>Nasa Photo of the Day</h1>
    </HeaderContainer>
    );
}

export default Header;