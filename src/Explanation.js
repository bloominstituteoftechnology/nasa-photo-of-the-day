import React from 'react';
import "./App.css";
import styled from 'styled-components';

const StyledExplaination = styled.div`
  padding: 20px;
  margin-top: 10px;
  &:hover {
    color: white;
    border-radius: 27px;
    background: ${props => props.theme.silver};
    transition: all 0.5s ease-in-out;
  }
  transition: all 0.5s ease-in-out;
`

function Explanation(props) {
    const {explanation} = props;
    return (
      <StyledExplaination className="App">
        {explanation}     
      </StyledExplaination>
    );
}
export default Explanation;