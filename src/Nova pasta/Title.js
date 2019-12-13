import React from 'react';
import styled from 'styled-components';

const TitleStyle = styled.h1`
  color: #20c20e;
`;

export default function Title(props) {
  return (
    <TitleStyle>
      <h1>{props.title}</h1>
    </TitleStyle>
  );
}
