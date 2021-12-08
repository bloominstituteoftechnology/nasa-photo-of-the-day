import React from 'react';
import '../App.css';
import styled from 'styled-components';

const StyledNavBar = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 8px;

    h1{
        display: flex;
        flex-direction: left;
    }
    .nav-list a{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
`

const Header = (props) => {
    return (
            <StyledNavBar className='navbar'>
                <h1>NASA</h1>
                <div className='nav-list'>
                    <a href='#' >Home</a>
                    <a href='#' >About</a>
                    <a href='#' >Shop</a>
                    <a href='#' >Contact</a>
                </div>
            </StyledNavBar>
    )
}

export default Header;