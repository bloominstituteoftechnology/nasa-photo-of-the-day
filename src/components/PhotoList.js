import React from "react";
import { MainDiv, WrapperDiv, DescriptionText, Image, Title} from "../style";

export default function Card(props) {
  if (!props.img) {
    return <h3>Loading...</h3>
  }

  return (
    <MainDiv >
      <div>
        <Title>{props.copyright}</Title>
        <Title>{props.title}</Title>
        <Title>{props.date}</Title>
      </div>
      <WrapperDiv >
        <Image src={props.img} alt=""></Image>
        <DescriptionText >{props.explanation}</DescriptionText>
      </WrapperDiv >
    </MainDiv >
   
  )

}