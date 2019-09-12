import React from 'react';
import Logo from '../assets/nasa-logo-web-rgb.png';
import Menu from '../assets/dashicons-menu.svg';
import styled from 'styled-components';

const NavBar = styled.section`
  width: 100%;
  height: 60px;
  background: #f1f1f1;
`;

const Nav = styled.div`
  width: 90%;
  max-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding-top: 8px;
`;

const NavLogo = styled.img`
  width: 80px;
`;

const NavMenu = styled.img`
  width: 30px;
`;

export default function Navigation() {
  return (
    <NavBar>
      <Nav>
        <NavLogo alt="NASA Logo" src={Logo}></NavLogo>
        <NavMenu src={Menu}></NavMenu>
      </Nav>
    </NavBar>
  );
}
