import React from "react";
import styled from "styled-components";

const Pic = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const PicChild = styled.img`
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Photo = (props) => {
  const { photo } = props;

  return (
    <Pic className="photo">
      <PicChild src={photo.hdurl} alt="space" />
    </Pic>
  );
};

export default Photo;
