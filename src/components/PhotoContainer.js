import React from "react";
import Button from "./Button";
import {
  PictureInfo,
  Image,
  Container,
  PictureTitle,
  PictureDate,
} from "./Styles";

export default function PhotoContainer(props) {
  return (
    <Container className="photo-container">
      <div className="photo">
        <Image src={props.props.hdurl} alt="Astronomy"></Image>
        {console.log(props.props)}
      </div>
      <div className="description">
        <PictureTitle>{props.props.title}</PictureTitle>
        <PictureDate>{props.props.date}</PictureDate>
        <PictureInfo>{props.props.explanation}</PictureInfo>
        <br />
        <Button />
      </div>
    </Container>
  );
}
