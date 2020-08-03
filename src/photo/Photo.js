/** @format */

import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const Photo = (props) => {
  console.log(props.photo);
  if (!props.photo) return <h3>Loading...</h3>;
  return (
    <div className="photo">
      <Card>
        <CardImg
          top
          width="100%"
          src={props.photo.hdurl}
          alt={props.photo.explanation}
        />
        <CardBody>
          <CardTitle>{props.photo.title}</CardTitle>
          <CardText>{props.photo.explanation} .</CardText>
          <CardText>{props.photo.date}</CardText>
          <CardText>{props.photo.copyright}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Photo;
