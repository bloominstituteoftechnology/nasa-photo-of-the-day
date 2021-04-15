import React from "react";
import Image from "./Image";
import Body from "./Body";

const Card = (props) => {
  if (!props.nasaData) {
    return <h3>Loading......</h3>;
  }
  const { title, explanation, date, url } = props.nasaData;

  return (
    <div>
      <Image picOfTheDay={url} />
      <Body title={title} explanation={explanation} date={date} />
    </div>
  );
};

export default Card;
