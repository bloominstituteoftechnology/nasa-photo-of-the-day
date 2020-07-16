import React from "react";
import styled from "styled-components"

const AppHeader = styled.div`
  background-color: black;
  color:white;
`;

const ImageContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 600px;
  overflow: hidden;

`
const StyledImage = styled.img`
  display:flex;
  width: 100%;
`



const Header = ({title, date, photo}) => {
  return (
    <AppHeader className="App-header">
      NASA Photo of the Day
      <div className="App-link">The App Link</div>
      <div className="outerEyeOpen"> {title} </div>

      <ImageContainer>
        <StyledImage src={photo} alt="NPOD" />
      </ImageContainer>
      <div className="date"> {date}</div>
    </AppHeader>
  );
};

export default Header;
