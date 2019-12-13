import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.p`
  background: black;
  color: #20c20e;
  height: 50px;
  font-size: 1.2rem;

  margin-top: 50px;
`;

export default function Footer(props) {
  return (
    <FooterStyle>
      <p>Picture taken by: {props.author}</p>
    </FooterStyle>
  );
}
