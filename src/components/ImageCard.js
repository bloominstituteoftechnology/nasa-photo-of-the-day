import React from "react";
import styled from "styled-components"

const StyledImgInfo = styled.p`
  text-align: left;
  margin-bottom: 20px;
`;

const StyledImg = styled.img`
  max-width: 80%;
`;


export default function ImageCard (props) {

  return (
    <div className="imageCard">
      <p className="imgTitle"> {props.imgTitle} </p>
      <p className="imgDate"> {props.imgDate} </p>
    <StyledImg src={props.imgURL} alt="space image"/>
      <StyledImgInfo> {props.imgInfo} </StyledImgInfo>
    </div>
  );
}
