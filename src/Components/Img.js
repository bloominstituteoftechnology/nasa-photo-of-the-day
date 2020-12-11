import React from "react";
import "./img.css";

import styled from "styled-components";

const StyledImage = styled.img`
  width: 300px;
  height: auto;
  border: 10px darkblue solid;
  margin: 2rem 0;
`;

function Img(props) {
  const { data } = props;

  return (
    <div>
      <StyledImage className="mainPhoto" src={data.url} alt="Photo" />
    </div>
  );
}

export default Img;
