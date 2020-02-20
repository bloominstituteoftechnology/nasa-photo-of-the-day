import React from 'react';
import styled from "styled-components";

const StyledDate = styled.p `
  padding: 2%;
  color: white;
  background: black;
  `

const Date = props => {
  console.log(props, " is props in Date")
  return (
    <div className="Date-container">
      <StyledDate className="date">{props.date}</StyledDate>
    </div>
  );
};


export default Date;