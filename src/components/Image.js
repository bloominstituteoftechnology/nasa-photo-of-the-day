import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import styled, { keyframes } from "styled-components";

import { API_KEY, BASE_URL } from "../constants/index";

const StyledImageFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: auto;
  padding-top: 1rem;
  color: ${(pr) => pr.theme.blueLight};
  text-transform: capitalize;
  button {
    background-color: ${(pr) => pr.theme.blueLight};
    color: ${(pr) => pr.theme.pale};
    font-size: ${(pr) => pr.theme.fontSize.large};
    border: solid 3px ${(pr) => pr.theme.pale};
    border-radius: 15px;
    padding: 5px;
    margin: 5%;
    width: 20%;
    &:hover {
      background-color: ${(pr) => pr.theme.pale};
      color: ${(pr) => pr.theme.black};
      transition: all 0.4s ease-in-out;
    }
    @media (max-width: 1000px) {
      font-size: ${(pr) => pr.theme.fontSize.small};
      width: 6rem;
    }
  }
  @media (max-width: 1000px) {
    width: 80%;
  }
`;

const StyledImage = styled.img`
  width: 100%auto;
  max-width: 100%;
  object-fit: cover;
`;

export default function Image(props) {
  const { camera, close, reClick } = props;
  const [imageData, setImageData] = useState("");

  function randomImage(data) {
    return data[Math.floor(Math.random() * (data.length + 1))];
  }

  useEffect(() => {
    axios
      .get(
        `${BASE_URL}${camera}/photos?earth_date=2015-10-6&api_key=${API_KEY}`
      )
      .then((res) => {
        setImageData(randomImage(res.data.photos));
        // console.log(res.data.photos[1].img_src)
      })
      .catch((err) => {
        debugger;
      });
  }, [camera, reClick]);

  return (
    <StyledImageFrame className='image'>
      <h2>
        {" "}
        {camera}: {imageData.earth_date}
      </h2>
      <div className='image-container'>
        <StyledImage src={imageData.img_src} alt='NASA_image'></StyledImage>
      </div>
      <button onClick={close}>Close</button>
    </StyledImageFrame>
  );
}
