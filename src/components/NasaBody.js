import React from "react";

import { CardText, CardBody } from "reactstrap";
//import "../card.css";

function NasaBody({ props }) {
  const { copyright, explanation } = props;

  if (!props) return <h3>Loading...</h3>;

  return (
    <div>
      <CardBody>
        <CardText>Copyrights: {copyright}</CardText>
        <CardText>{explanation}</CardText>
      </CardBody>
    </div>
  );
}

export default NasaBody;
