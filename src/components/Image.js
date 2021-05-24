import React from "react";
import styled from "styled-components";

export default function Image({ nasaPhoto }) {
  if (!nasaPhoto) return <h3>Loading...</h3>;

  return (
    <StyledImage className="image">
      <div className="photo-container">
        <h2>{nasaPhoto.title}</h2>
        {nasaPhoto.media_type === "image" ? (
          <div className="media-container">
            <div>
              <img src={nasaPhoto.url} alt={`NASA's daily`} />
            </div>
          </div>
        ) : (
          <div className="media-container">
            <div>
              <iframe
                title="NASA video of the day"
                width="800"
                height="500"
                src={nasaPhoto.url + "?controls=0"}
              ></iframe>
            </div>
          </div>
        )}
      </div>
      <div className="photo-details">
        <StyledP>{nasaPhoto.date}</StyledP>
        <StyledP>{nasaPhoto.explanation}</StyledP>
      </div>
    </StyledImage>
  );
}

//styled component
const StyledImage = styled.div`
  color: white;
  background-color: black;
  font-size: 20px;
  margin: 5px;
`;

const StyledP = styled.p`
  transition: all 0.5s ease-in-out;
  padding: 0 5%;
  &:hover {
    color: #198cd7;
    transform: scale(1.1);
    transition: all 0.5s ease-in-out;
  }
`;
