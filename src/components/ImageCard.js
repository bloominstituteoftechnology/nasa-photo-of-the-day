import React from "react";
import Description from "./Description";
import Image from "./Image";
import Title from "./Title";
import styled, { keyframes } from "styled-components";

const kf = keyframes`
    100%{
        opacity: 1;
    }
`;

const ImageCardContainer = styled.div`
  opacity: 0;
  animation: ${kf} 0.75s ease-in-out forwards;
  width: 80%;
  margin: 5% auto;
  border: 1px solid #000;
  border-radius: 10px;
  box-shadow: 5px 10px 20px #2e2e2e;
  background-color: #4e4e4e;
  color: #fff;

  &:hover {
    box-shadow: 5px 10px 40px #2f4f4f;
    transition: 0.75s ease-in-out;
  }
  transition: 0.75s ease-in-out;

  @media (max-width: 500px) {
    width: 100%;
    margin: 0%;
  } ;
`;

export default function ImageFinder(props) {
  const { data } = props;
  return (
    <>
      <ImageCardContainer>
        <Title title={data.title} date={data.date} />
        <Image src={data.url} alt={data.title} media_type={data.media_type} />
        <Description explanationData={data.explanation} />
      </ImageCardContainer>
    </>
  );
}
