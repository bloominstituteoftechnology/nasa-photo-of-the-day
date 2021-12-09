import React from "react";
import styled from 'styled-components';

const StyledHeader = styled.div`
    background-color: lightgray;

    a{
        text-decoration:none;
        padding: 5%;
    }
`
const Header = props => {
    const {title, link} = props;

    return(

            <StyledHeader>
                <div className='titleWrapper'>
                    <h1>{title}</h1>
                </div>
                <div className='navWrapper'>
                    <nav>
                        <a href={link}>Source</a>
                        <a href='/'>About</a>
                        <a href='/'>Home</a>
                        <a href='/'>Contact</a>
                    </nav>
                </div>
            </StyledHeader>
        
    )
}
export default Header