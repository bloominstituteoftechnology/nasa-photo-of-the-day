import React from "react";
import styled from "styled-components";

const StyledVideo = styled.iframe`
  width: 90%;
  border-radius: 10px;
`

const NasaVid = (props) => {
  return <StyledVideo src={props.video} frameborder='0' height='300' width='400' allow='autoplay; encrypted-media' allowFullScreen title='video' />
};

export default NasaVid;



