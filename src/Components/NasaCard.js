import React from "react";
import { Card as Cardstyle } from "reactstrap";
import { Container } from "reactstrap";
import { CardTitle, CardSubtitle } from "reactstrap";

  const NasaCard = props => {
    return (
      <Container key={props.id}>
      <br />
      <br />
        <Cardstyle color="dark" className="text-white">
        <CardTitle>{props.date}</CardTitle>
        <h3>{props.title}</h3>
        <img width="100%" alt="Random NASA pic of the day" src={props.imgUrl} />
        <hr></hr>
        <CardSubtitle>{props.explanation}</CardSubtitle>
      </Cardstyle>

      </Container>
    );
  };
 export default NasaCard;

 