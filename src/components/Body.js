import React from "react";
import styled from 'styled-components'



const StyledBody = styled.div`
  background-color: ${pr => pr.theme.secondaryColor};
  padding: 2% 7% 8% 7%;
  h1, p {
    color: ${pr => pr.theme.tertiaryColor}
  }
  p {
    width: 70%;
    display: flex;
    text-align: center;
    flex-wrap: nowrap;
    justify-content: center;
    padding-left: 15%;
  }

  h1 {
    font-weight: bold;
  }

  p:nth-of-type(2) {
    color: ${pr => pr.theme.white};
  }
    
  
`




const Body = ( { title, explanation, date } ) => {
  
  return (
    <StyledBody>
      <h1>{title}</h1>
      <p>{explanation}</p>
      <p>{date}</p>
    </StyledBody>
  );
};

export default Body;
