import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
    width: 90%;
    border-radius: 10px;
`

const NasaImg = (props) => {
  return <StyledImg src={props.photo} alt=" " />;
};

export default NasaImg;
