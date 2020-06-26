import React from 'react';
import styled, { css } from 'styled-components';

const CardDiv = styled.div`
  width: 85vw;
  margin-top: 2vh;
  margin-bottom: 2vh;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: #4f8a8b;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const StyledImg = styled.img`
  width: auto;
  height: 30vh;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`;

const StyledInfo = styled.div`
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f4f6ff;
`;

const StyledTitleDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledTitle = styled.h2`
  width: 20vw;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 0px;
  color: #ea907a;
`;

const StyledDate = styled.p`
  font-family: sans-serif;
  font-weight: lighter;
  width: 5vw;
  font-size: 12px;
  margin-top: 5px;
  color: #ffcb74;
`;

const StyledExplanation = styled.p`
  width: 95%;
  font-family: sans-serif;
  line-height: 3vh;
  text-align: left;
  text-indent: 50px;
  margin-top: 10px;
  margin-bottom: 2px;
  font-size: 12px;
`;

const StyledCopyright = styled.p`
  font-family: sans-serif;
  font-weight: bold;
  font-size: 12px;
  margin-top: 2px;
  margin-bottom: 0px;
  text-align: center;
  width: 50%;
  color: #ea907a;
`;

const Card = ({ copyright, date, explanation, title, imgUrl }) => {
  return (
    <CardDiv>
      <StyledImg src={imgUrl}/>
      <StyledInfo>
        <StyledTitleDate>
          <StyledTitle>{title}</StyledTitle>
          <StyledDate>{date}</StyledDate>
        </StyledTitleDate>
        <StyledExplanation>{explanation}</StyledExplanation>
        <StyledCopyright>{copyright}</StyledCopyright>
      </StyledInfo>
    </CardDiv>
  );
};

export default Card;

