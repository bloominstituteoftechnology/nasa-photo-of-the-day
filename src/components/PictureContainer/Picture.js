import React from "react";
import "./Picture.css";
import { PictureWrapper, Picture } from './PictureStyles';

const Pictures = props => {
  return (
    <PictureWrapper>
        <Picture src={props.pic} alt={props.title} />
    </PictureWrapper>
  );
};

export default Pictures;