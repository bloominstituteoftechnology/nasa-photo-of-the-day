import React, { useState } from 'react';

import styled from 'styled-components';

const StyledContainer = styled.div`
  // background-color: lightgray;
  margin-top: 50px;
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`;

const StyledLabel = styled.div`
  color: ${pr => pr.theme.white};
  background-color: ${pr => pr.theme.background};
  cursor: pointer;
  padding: 5px;
  margin: 0 auto;
  width: 1000px;
  &:focus {
    outline: none;
  }
`;

const StyledList = styled.div`
  position: relative;
  list-style-type: none;
  width: 100%;
`;

const StyledItem = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const StyledButton = styled.div`
  color: ${pr => pr.theme.gray};
  background-color: ${pr => pr.theme.background};
  cursor: pointer;
  padding: 5px;
  margin: 0 auto;
  width: 1000px;
  transition: ease-in-out 0.20s;
  &:hover {
    color: ${pr => pr.theme.white};
  }
`;

const Dropdown = (props) => {

  const { date, setDate, list, current } = props;

  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  const change = (day) => {

    setDate(`${current.year}-${current.month}-${day}`);

    setOpen(!open);

  };

  return (
    <StyledContainer className="Dropdown">
      <StyledLabel
        tabIndex={0}
        role='button'
        onKeyPress={() => toggle()}
        onClick={() => toggle()}
      >
        <span>{date}</span>
      </StyledLabel>
      { open &&
        (
          <StyledList>
            {
              list.map((day) => (
                <StyledItem>
                  <StyledButton role='button' onClick={() => change(day)}>
                    <span>{`${current.year}-${current.month}-${day}`}</span>
                  </StyledButton>
                </StyledItem>
              ))
            }
          </StyledList>
        )
      }
    </StyledContainer>
  );

};

export default Dropdown;
