import React from "react";
import styled, { keyframes } from "styled-components";
import Loader from "react-loader-spinner";

const wooble = keyframes`

16.65% {
  -webkit-transform: translateY(8px);
  -ms-transform: translateY(8px);
  transform: translateY(8px);
}
33.3% {
  -webkit-transform: translateY(-6px);
  -ms-transform: translateY(-6px);
  transform: translateY(-6px);
}
49.95% {
  -webkit-transform: translateY(4px);
  -ms-transform: translateY(4px);
  transform: translateY(4px);
}
66.6% {
  -webkit-transform: translateY(-2px);
  -ms-transform: translateY(-2px);
  transform: translateY(-2px);
}
83.25% {
  -webkit-transform: translateY(1px);
  -ms-transform: translateY(1px);
  transform: translateY(1px);
}
100% {
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
`;

const HeaderTittle = styled.div`
  width: 100%;
  height: 71vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  -webkit-transform: scale(0.9, 0.9);
  transform: scale(0.9, 0.9);
  -webkit-transition: 0.65s ease-in-out;
  transition: 0.65s ease-in-out;
  opacity: 0.9;

  &:hover {
    box-shadow: 0 16px 60px rgba(0, 0, 0, 1.3);
    -webkit-transform: scale(1, 11);
    transform: scale(1, 1);
    -webkit-transition: 0.65s ease-in-out;
    transition: 0.65s ease-in-out;
    opacity: 1;
    border: none;
  }

  figure {
    width: 100%;
    display: block;
    height: 71vh;
    margin: 0;
    position: absolute;
    padding: 0;
    overflow: hidden;
    border-radius: 10px;
    z-index: -1;
    animation: ${wooble};
    animation-duration: 10s;
    animation-iteration-count: infinite;
  }
  &:hover figure {
    animation: none;
  }
  img {
    width: 100%;
    height: 71vh;
    -webkit-transition: 1s ease-in-out;
    transition: 1s ease-in-out;
  }
  figure > img {
    -webkit-transform: scale(1.3, 1.3);
    transform: scale(1.3, 1.3);
    -webkit-transition: 0.65s ease-in-out;
    transition: 0.65s ease-in-out;
  }
  &:hover img {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
    -webkit-transition: 0.65s ease-in-out;
    transition: 0.65s ease-in-out;
  }
`;

const Header = ({ data }) => {
  return (
    <HeaderTittle>
      <figure>
        {data.hdurl ? (
          <img src={data.hdurl} alt={data.title} />
        ) : (
          <Loader
            type="BallTriangle"
            color="#00BFFF"
            height={200}
            width={200}
          />
        )}
      </figure>
    </HeaderTittle>
  );
};

export default Header;
