import React from "react";
import styled from 'styled-components';

const StyledTitle = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 3rem;
  padding: 2%;
  margin-bottom: 2%;
  border-bottom: 1px solid ${pr => pr.theme.tertiaryColor};
`;



const Title = (props) => {
  return (
    <StyledTitle>
      <h1>{props.title}</h1>
      <p>{props.date}</p>
    </StyledTitle>
  );
};

export default Title;
