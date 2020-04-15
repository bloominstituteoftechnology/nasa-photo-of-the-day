import React from "react";
import styled from 'styled-components';
import "./NavBar.css";
import { HeaderWrapper, ImgWrapper, LogoText, IconMain } from './NavBarStyles';



const NavBar = () => {
  return (
    <HeaderWrapper>

      <ImgWrapper>
      <IconMain className="fas fa-user-astronaut iconMain"></IconMain>
   
        <LogoText>NASA Photo Of The Day</LogoText>

      </ImgWrapper>

      <form className="search-form">
        <input
          type="text"
          placeholder="Search Photos"
        />
      </form>

    

    </HeaderWrapper>
  );
};

export default NavBar;