import React from 'react';
import styled from 'styled-components';
import Fb from '../assets/dashicons-facebook-alt.svg';
import Twitter from '../assets/dashicons-twitter.svg';
import Email from '../assets/dashicons-email.svg';
import Share from '../assets/dashicons-share.svg';

const HeaderSection = styled.section`
width: 50%;
max-width: 520px;
position: relative;
margin-left: 15%;
`;

const Bold = styled.span`
font-weight: bold;
`;

const RedDash = styled.span`
color: #FC3D21;
`;

const HeaderCategory = styled.div`
font-family: 'Roboto', sans-serif;
font-size: 24px;
text-align: left;
margin-top: 100px;
`;

const HeaderTitle = styled.h1`
font-family: 'Roboto', sans-serif;
font-size: 48px;
text-align: left;

`;

const SocialIcons = styled.div`
width: 100%;
text-align: left;
margin-bottom: 15px;
padding-bottom: 15px;
border-bottom: 1px solid #b8b8b8;
`;

const Icon = styled.img`
padding-right: 1%;
`;




export default function Header() {
    return <HeaderSection>
        <HeaderCategory><Bold>Astronomy </Bold><RedDash>|</RedDash> Photography</HeaderCategory>
        <HeaderTitle>Photo of the Day</HeaderTitle>
        <SocialIcons>
            <Icon src={Fb} title='Facebook' alt='facebook'/>
            <Icon src={Twitter} title='Twitter' alt='twitter'/>
            <Icon src={Email} title='Email' alt='email'/>
            <Icon src={Share} title='Share' alt='share'/>
        </SocialIcons>
    </HeaderSection>
}

