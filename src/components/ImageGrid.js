import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageCard from "./ImageCard";
import styled from "styled-components"

const StyledImageGridWrapper = styled.div`
  padding-bottom: 20px;
`;

const StyledImageGrid = styled.div`
  border: 1px solid white;
  border-radius: 10px;
  padding: 20px;
  width: 75%;
  margin: 0 auto;
  background-color: white;
`;

export default function ImageGrid () {

  const [photo, setPhoto] = useState([]);
  const [photoTitle, setPhotoTitle] = useState([]);
  const [date, setDate] = useState([]);
  const [info, setInfo] = useState([]);
  const axios = require('axios')

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=y70elfOEXh8fUbXeFjtv1y9IxvULbcHTiMblO6km&date=2012-03-14')
      .then(response => {
        const imgURL = response.data.hdurl;
        console.log(imgURL);
        setPhoto(imgURL);
        const imgTitle = response.data.title;
        console.log(imgTitle);
        setPhotoTitle(imgTitle);
        const imgDate = response.data.date;
        console.log(imgDate);
        setDate(imgDate);
        const imgInfo = response.data.explanation;
        console.log(imgInfo);
        setInfo(imgInfo);
      });
  }, []);


  return (
    <StyledImageGridWrapper>
      <StyledImageGrid>
       <ImageCard key={photo} imgURL={photo} imgTitle={photoTitle} imgDate={date} imgInfo = {info} />
      </StyledImageGrid>
    </StyledImageGridWrapper>
  )
}
