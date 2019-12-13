import React, { useState, useEffect } from "react";
//  import Picturecard from "./PictureCard";
import axios from "axios";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from "reactstrap";

const PictureGrid = () => {
  const [picture, setPictures] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=OPlABOMDOfWvHrty7YqdZxAYClkWMEhvFEOVlTiv`
      )
      .then(res => {
        console.log(res);
        setPictures(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>To days Nasa image</h1>
      <Card>
        <CardBody>
          <CardTitle>{picture.title}</CardTitle>
        </CardBody>
        <img
          className="picture-image"
          width="100%"
          height="20%"
          src={picture.url}
          alt="Card image cap"
        />
        <CardBody>
          <CardText>{picture.explanation}</CardText>
          <CardLink href="https://api.nasa.gov/">Card Link</CardLink>
          <CardLink href="https://www.linkedin.com/notifications/">
            Another Link
          </CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default PictureGrid;
