import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  max-width: 100%;
`;

export default function NasaImage(props) {
  const { nasaImage } = props;

  return (
    <div className="Photo">
      <StyledImage src={nasaImage} alt="Comet over the Alps in Italy" />
    </div>
  );
}
