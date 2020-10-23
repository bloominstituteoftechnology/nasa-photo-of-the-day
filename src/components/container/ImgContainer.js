import React from 'react'
import styled from 'styled-components';

const ImageContainer = styled.div`
  margin: 0 0 3rem 0;
	width: 100%;
  box-shadow: 0px 0px 30px -12px rgba(0, 0, 0, 0.38);
  display: flex;
  justify-content: center;
  padding: 3rem 2rem;
  border-radius: 20px;
`;

const Img = styled.img`
width: 90%;
`;

const ImgContainer = props => {

  return (
    <ImageContainer>
      {!props.imgUrl ? <h3>Loading...</h3> : <Img src={props.imgUrl} alt="random img"/>}
    </ImageContainer>
  )
}

export default ImgContainer
