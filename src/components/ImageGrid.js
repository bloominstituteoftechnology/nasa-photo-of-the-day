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

  const [data, setData] = useState([]);
  const [photo, setPhoto] = useState([]);
  const [photoTitle, setPhotoTitle] = useState([]);
  const [date, setDate] = useState([]);
  const [info, setInfo] = useState([]);
  const axios = require('axios')

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=y70elfOEXh8fUbXeFjtv1y9IxvULbcHTiMblO6km&date=2016-01-31')
      .then(response => {
        const data = response.data;
        console.log(data);
        setData(data)
      });
  }, []);


  return (
    <StyledImageGridWrapper>
      <StyledImageGrid>
       <ImageCard
         key={data.title}
         imgURL={data.hdurl}
         imgTitle={data.title}
         imgDate={data.date}
         imgInfo = {data.explanation}
       />
      </StyledImageGrid>
    </StyledImageGridWrapper>
  )
}
