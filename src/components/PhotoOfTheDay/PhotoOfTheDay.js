import React from 'react';
// import ReactDOM from 'react-dom';
// import './PhotoOfTheDay.css';

import styled from 'styled-components';

const ImageDiv = styled.div`
  display: block;
  width: 50%;
  height: 100%;
  margin: 0 auto;
  padding: 5% 5%;
  font-family: 'Open Sans', sans-serif;
  background-color: #cccccc;
  color: blac;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 5px 5px 15px 5px #000000;
  box-shadow: 5px 5px 15px 5px #000000;
`;
const Image = styled.img`
  width: 100%;
`;

const TitleDiv = styled.div`
  font-size: 30px;
  font-weight: 900;
  text-align: start;
  line-height: 6rem;
`;

const H2Div = styled.div`
  margin: 0rem 0 1rem;
  text-align: start;
`;

const PDiv = styled.p`
  text-align: start;
  width: 100%;
`;

const EndDiv = styled.div`
  text-align: end;
  margin: 0rem 0 1rem;
`;
const PhotoOfTheDay = ({ date, title, url, explanation, copyright }) => {
  // console.log(title);
  return (
    <ImageDiv>
      <div>
      <Image src={url} alt='Nasa' />
      </div>
      <H2Div>Date: {date}</H2Div>
      <EndDiv>By: {copyright}</EndDiv>

      <TitleDiv>{title}</TitleDiv>
      <div>
      <PDiv>{explanation}</PDiv>
      </div>
      </ImageDiv>
  );
};

export default PhotoOfTheDay;