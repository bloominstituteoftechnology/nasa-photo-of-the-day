import React from "react";
import styled from "styled-components";


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
    <div>
        <ImgContainer>
            <Img src={props.imgSrc} />
        </ImgContainer>
      
    </div>
  );
};

export default DisplayImg;


