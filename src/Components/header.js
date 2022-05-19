import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const CustomHeader = styled.div`
    border-bottom: solid .5vh white;
    border-right: solid .5vh white;
    border-left: solid .5vh white;
    margin: 3vh 0vh 0vh 0vh;
    width: 75%;
    border-radius: 2vh;
    background-color: lightblue;
    padding: 2vh;
    @keyframes fade-in {
        0% {opacity: 0%;}
        100% {opacity: 100%;}
    }
    animation-name: fade-in;
    animation-duration: 1s;
`;

const Logo = styled.h1`
    padding: 0px;
    margin: 0px;
`;

const NavBar = (props) =>{
    const {setTypeOfImg} = props;

    return (
    <CustomHeader className="nav-bar">
        <Logo>NASA - Astronomy Picture Of the Day</Logo>
    </CustomHeader>
    )
}

export default NavBar;