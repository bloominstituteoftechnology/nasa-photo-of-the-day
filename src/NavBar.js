import React from 'react'
import styled from 'styled-components'
import GreyNavBar from './GreyNavBar';

const NavBarDiv = styled.nav`
display: flex;
justify-content: center;
margin-top: 15px;
background-image: 
radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)),
radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)),
radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0));
background-repeat: repeat;
background-size: 200px 200px;
`;

const Links = styled.a`
font-size: 22px;
color: white;
text-decoration: none;
padding: 10px;
margin-top: 20px;
:hover {
    color: #4682B4;
    cursor: pointer;
}
`
const NasaLogo = styled.img`
max-width:100px;
align-items:center;
margin-right: 60px;
`
function NavBar() {
    return (
        <div>    
        <NavBarDiv>
            <NasaLogo src = "./Logo.png"></NasaLogo>
            <Links href="">Missions |</Links>
            <Links href="">Galleries |</Links>
            <Links href="">NASA TV |</Links>
            <Links href="">Follow NASA |</Links>
            <Links href="">Downloads |</Links>
            <Links href="">About |</Links>
            <Links href="">NASA Audiences </Links>
        </NavBarDiv>
        <GreyNavBar />
        </div>
    )
}

export default NavBar

