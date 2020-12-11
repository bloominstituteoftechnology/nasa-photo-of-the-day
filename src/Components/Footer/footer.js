import React, {useState, useEffect} from "react";
import styled from "styled-components";
const Footer = (props) => {
    return(
        <StyledFooter>
        <div>
            <nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                
            </nav>
        </div>
        </StyledFooter>
    )
}

export default Footer

const StyledFooter = styled.div`
    color: ${(pr) => (pr.theme.extraColor)};

    nav{
        width: 30%;
        display:flex;
        align-items:center;
        justify-content:center;
        margin: 1.5% auto;
    }

    a {
        text-decoration: none;
        color: ${(pr) => (pr.theme.darkColor)};
        background-color: none;
        display:flex;
        justify-content:center;
        align-items: center;
        flex-direction: row;
        width: 12%;
        height: 1vh;
        margin: 0% 4% ;
        border-left: 4px solid goldenrod;
        border-right: 4px solid goldenrod;
        padding:2% 6%;
        font-size: 20px;
    }

    & a:hover{
        transform: scale(1.2);
        transition: all 0.8s ease-in-out;
        text-decoration: underline;
        color: ${(pr) => (pr.theme.black)}
    }

`;