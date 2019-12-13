import React from 'react';
import styled from 'styled-components';

const DateStyle = styled.p`
  color: #20c20e;
`;

export default function Date(props) {
  return (
    <DateStyle>
      <p>{props.date}</p>
    </DateStyle>
  );
}
