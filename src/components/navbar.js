import React from "react";

import {AppBar, Toolbar, Typography, Icon} from '@material-ui/core';

import styled from 'styled-components';

const NasaIcon = styled.img`
  height: 50px;
  width: 60px;
`

function Navbar() {
    
  
  return (
  <AppBar position="static">
    <Toolbar>
      <NasaIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png" />
      <Typography variant="h5">
        App
      </Typography>
    </Toolbar>
  </AppBar>
  );
}

export default Navbar;
