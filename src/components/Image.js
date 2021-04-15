import React from "react";
import styled from 'styled-components';

const StyledImage = styled.div`
  background-color: ${pr => pr.theme.primaryColor};
  padding: 3%;
  img {
    width: 22rem;
    transition: all 1s ease-in-out;
  }
  img:hover {
    transform: scale(1.2);
    transition: all 1.2s ease-in-out;
  }
  
`



const Image = ({ picOfTheDay }) => {
  return (
    <StyledImage>
      <img src={picOfTheDay} alt={"pic of the day"}></img>
    </StyledImage>
  );
};

export default Image;
