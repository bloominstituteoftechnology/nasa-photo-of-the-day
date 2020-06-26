import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";
import styled from "styled-components";

const StyledImg = styled.img`
  height: auto%;
  width: 80%;
  margin-right: 10px;
  margin-left: 10px;
`;

const NasaList = () => {
  const [nasaPhoto, setNasaPhoto] = useState({});
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=Todv5y6q4RcbOU3Ov5o6g8mMgfAvtOszsy7CeA9x"
      )
      .then((response) => {
        console.log("Response object", response);
        setNasaPhoto(response.data);
      })
      .catch((error) => {
        console.log("Error object", error);
      });
  }, []);
  console.log("HERE", nasaPhoto);
  return (
    <div className="photo">
      <StyledImg className="img" src={nasaPhoto.hdurl} />
      <NasaCard
        title={nasaPhoto.title}
        explanation={nasaPhoto.explanation}
        date={nasaPhoto.date}
      />
    </div>
  );
};

export default NasaList;
