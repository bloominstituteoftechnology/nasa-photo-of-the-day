import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "./constants/index";
import styled from "styled-components";

const RoverCarousel = styled.div`
  width: 25%;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function () {
  const [pastNasaData, setPastNasaData] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?${API_KEY}&date=2012-03-14`)
      .then((res) => {
        setPastNasaData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <RoverCarousel
      name="rover"
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src={pastNasaData.url}
            alt="First slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={pastNasaData.url}
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={pastNasaData.url}
            alt="Third slide"
          />
        </div>
      </div>
    </RoverCarousel>
  );
}
