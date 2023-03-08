import React from "react";
import styled from "styled-components";

const SecondaryTitle = styled.div`
  text-align: center;
  font-size: 50px;
  padding-top: 20px;
`;

const ImageInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  flex-wrap: wrap;
  align-items: center;
  padding: 40px;
`;

const InfoText = styled.p`
  padding: 20px;
  font-size: 20px;
  width: 50%;
`;

function Body({ title, img, description }) {
  return (
    <div>
      <SecondaryTitle>
        <h2>{title}</h2>
      </SecondaryTitle>

      <ImageInfo>
        <img
          style={{
            border: "4px solid grey",
            borderRadius: "2px",
            width: "50%",
          }}
          src={img}
          alt={title}
        />
        <InfoText>{description}</InfoText>
      </ImageInfo>
    </div>
  );
}

export default Body;
