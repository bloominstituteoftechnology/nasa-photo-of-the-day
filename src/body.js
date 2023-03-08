import React from "react";
import styled from "styled-components";

const SecondaryTitle = styled.div`
  text-align: center;
  font-size: 50px;
  padding-top: 45px;
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
  margin: 10px auto;
  font-size: 20px;
  width: 50%;
  border: 4px solid #364958;
  background-color: #3b6064;
  border-radius: 15px;
  color: white;
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
            maxWidth: "75%",
            height: "50%",
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
