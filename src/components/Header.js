import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";

const zoom = keyframes`
0% {
  -webkit-transform: translate(0,0%) ;
}

50% {
  -webkit-transform: translate(0,5%)
}

100% {
  -webkit-transform: translate(0,0%)
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
  opacity: 1;

  &:hover {
    box-shadow: 0 16px 60px rgba(0, 0, 0, 1.3);
    -webkit-transform: scale(1, 11);
    transform: scale(1, 1);
    -webkit-transition: 0.65s ease-in-out;
    transition: 0.65s ease-in-out;
    opacity: 0.9;
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
    animation: ${zoom};
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

const Header = props => {
  return (
    <HeaderTittle>
      <figure>
        <img src={props.data.hdurl} />
      </figure>
    </HeaderTittle>
  );
};

export default Header;
