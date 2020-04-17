import React, { useState } from "react";
import styled from 'styled-components';
import "./NavBar.css";
import { HeaderWrapper, ImgWrapper, LogoText, IconMain, DropDownBar } from './NavBarStyles';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';




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

<DropDownBar>
  <DropDown></DropDown>
</DropDownBar>
    
   
    </HeaderWrapper>
  );
};

export default NavBar;



const DropDown = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Menu
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Photo Archive</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export { DropDown };
