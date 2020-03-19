import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const PhotoContainer = styled.div`
min-width: 50%

`

const Info =({title, date, explanation, copyright})=>{
    return (
      <PhotoContainer>
        <p>{date}</p>
        <h2>{title}</h2>
        <p>{explanation}</p>
        <p>Photo by: {copyright}</p>
      </PhotoContainer>
    );
  };
export default Info;