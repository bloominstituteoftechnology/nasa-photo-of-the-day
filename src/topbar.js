import React from 'react';
import styled from 'styled-components'
import menuIcon from './menu.png'
import Menu from './Menu'

//styles
const StyledTopBar = styled.div`
  color: white;
  .nav-content {
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  .logo {
    margin: 1rem;
  }
  .menu {
    margin: 1rem;
    height: 2rem;
  }
`

//menu-bar function


const TopBar = () => {
  

  return (
    <StyledTopBar>
      <div class="nav-content">
        <div className="logo">Logo</div>
        <img class='menu' src={menuIcon} alt="menu button" />
      </div>
      <Menu />
    </StyledTopBar>


  );
};

export default TopBar