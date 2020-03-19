import React from "react";
import styled from "styled-components";


const MyButton = styled.button`
  background:blue;
  color:white;
`;
const MyBackground = styled.div`
  background:yellow;
 
`;


const Header = props => {
    return (

        <MyBackground>
            <MyButton>Welcome to my NASA page!</MyButton>
        </MyBackground>
    );
};

export default Header;
