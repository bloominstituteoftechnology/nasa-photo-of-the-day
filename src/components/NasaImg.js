import React from "react";

import { CardImg, CardBody, CardTitle, CardHeader } from "reactstrap";
//import "../card.css";

function NasaImg({ props }) {
  const { date, title, url } = props;

  if (!props) return <h3>Loading...</h3>;

  return (
    <div>
      <CardHeader tag="h3">{title}</CardHeader>
      <CardBody>
        <CardTitle>{date}</CardTitle>
      </CardBody>
      <CardImg style={{marginBottom: "30px"}} src={url} alt="nasa" />
    </div>
  );
}

export default NasaImg;
