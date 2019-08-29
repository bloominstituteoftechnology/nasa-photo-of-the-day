import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display:flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
`;
const ImgContainer = styled.div`
    padding: 20px 0;
    width:100%;
`;

const Img = styled.img`
    width: 100%;
    height: 600px;
    border-radius: 50px;
`

const DisplayImg = props => {
  return (
    <Container>
        <div className="info">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
        
        <ImgContainer>
            <Img src={props.imgSrc} />
        </ImgContainer>
      
    </Container>
  );
};

export default DisplayImg;


