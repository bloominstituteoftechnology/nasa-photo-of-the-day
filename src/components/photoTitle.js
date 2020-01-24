import React from "react";
import styled from "styled-components";
 

const APODTitle = styled.h2`
    font-size: 4rem;
    font-family: 'Poller One', cursive;
    margin: 30px 0;
`;

const PhotoTitle = props => {
  console.log(`PhotoTitle: props: `, props);
  return <APODTitle>{props.title}</APODTitle>;
};

export default PhotoTitle;