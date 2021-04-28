import React from 'react';
import { HeaderDiv } from '../styledComponents/styledComponents.js';


function Header (props) {
const { date, title } = props.props;

  return (
    <HeaderDiv>
      <h1>{date}</h1>
      <h1>{title}</h1>
    </HeaderDiv>
  );
}

export default Header;
