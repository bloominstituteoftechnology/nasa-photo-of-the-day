import React from 'react';
import styled from "styled-components";
// import "./App.css";

const Header = props =>{
    const {header} = props;
    return (
        <StyledHeader>
        <div className='header'>
            <h1>NASA Photo of the Day!</h1>
        </div>
        </StyledHeader>
    );
}

const StyledHeader = styled.div`
width:100%;
background-color:white;
/* padding-top:10%; */
border-bottom:3px #222627 solid;
h1 {
    font-size:3em;
    color:darkseagreen;
    font-family:"rubik";
    
    &:hover{
        color:darkolivegreen;
        font-size:3.5rem;
    }
}
`;

export default Header;