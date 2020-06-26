import React from 'react'
import styled from 'styled-components'


const SmallNav = styled.nav`
background-color: #696969;
display:flex;
justify-content: center;
align-items: center;
margin-left: 550px;
margin-bottom: 50px;
width: 50%;
padding: 10px;

`;

const SecondLinks =styled.a`
color: white;
margin: 5px;
text-decoration: none;
font-size: 14px;
border-right: 1px solid #C0C0C0;
padding-right: 5px;
:hover {
    background-color: grey;
}
`;



function GreyNavBar() {
    return (
        <SmallNav>
            <SecondLinks href="">Humans in Space </SecondLinks>
            <SecondLinks href="">Moon to Mars </SecondLinks>
            <SecondLinks href="">Earth </SecondLinks>
            <SecondLinks href="">Space Tech </SecondLinks>
            <SecondLinks href="">Flight</SecondLinks>
            <SecondLinks href="">Solar System and Beyond</SecondLinks>
            <SecondLinks href="">STEM Engagement</SecondLinks>
            <SecondLinks href="">History</SecondLinks>
            <SecondLinks href="">Benefits to You</SecondLinks>
        </SmallNav>
    )
}

export default GreyNavBar
