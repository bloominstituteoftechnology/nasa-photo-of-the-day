import React from "react";
import styled from "styled-components";

const DateP = styled.p`
  background-color: ${({theme}) => theme.secondaryColor};
  border:1px ${({theme}) => theme.primaryColor};
  margin: 0%;
  padding: 1% 12.5%;
  
`

export default ({data}) => <DateP>{data.explanation}</DateP>;