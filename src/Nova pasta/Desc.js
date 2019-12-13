import React from 'react';
import styled from 'styled-components';

const Description = styled.p`
  color: #20c20e;
  font-size: 1.5rem;
  border: 5px solid #20c20e;
  padding: 50px;
  text-align: right;
  margin-right: 100px;
  width: 40%;
  height: 100%;
`;

export default function Desc(props) {
  return (
    <Description>
      <p>{props.desc}</p>
    </Description>
  );
}
