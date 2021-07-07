import React from "react";
import "./index.css";
import { Alert } from 'reactstrap';
import styled from 'styled-components'

const StyledNavBar = styled.div`
background-color: ${tm => tm.theme.primaryBackgroundColor};
color: ${tm => tm.theme.secondaryTextColor};
text-transform: Uppercase;
font-family: 'Ubuntu', sans-serif;
height: 10vh;
display: flex;
justify-content: center;
padding-top: 2%;
`;

export default function NavBar() {
    return (
        <StyledNavBar>
        <div>
            <ul>
                <p>Home</p>
            </ul>
        </div>
        </StyledNavBar>
    )
}