import React from "react";
import styled from "styled-components";

const Card = styled.div`
  color: white;
  text-align: left;
  padding-left: 20px;
  padding-right: 20px;
`;

const NasaCard = (props) => {
  return (
    <Card className="nasa-card">
      <h2>{props.title}</h2>
      <p>{props.date}</p>
      <p>{props.explanation}</p>
    </Card>
  );
};

export default NasaCard;
