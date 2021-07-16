import React from 'react';
import styled from 'styled-components';



const StyledNavBar = styled.div`
    
    nav {
    display: flex;
    justify-content: space-around;
    font-size: 1.3rem;
    background-color: #778899;
    transform: scale(1.1);
    border-radius: 8px;
    box-shadow: 0px 3px 10px -5px #807f7f;
    border: 2px solid #B0E0E6
;


    }

    a {
        text-decoration: none;
        color: white;
        border: 3px solid #B0E0E6
;
        box-shadow: 0px 1px 6px -2px #807f7f;
        border-radius: 8px;
        background-color: gray;

        margin: 16px;
        padding: 3px 20px;

        &:hover {
            transform: scale(1.1);
        }
    }
`



export default function NavBar () {

    return (
        <StyledNavBar>
            <nav>
                <a href='#NASA'>NASA</a>
                <a href='#random'>Random</a>
                <a href='#yesterday'>Yesterday</a>
                <a href='#about'>About</a>
            </nav>
        </StyledNavBar>
    );
}