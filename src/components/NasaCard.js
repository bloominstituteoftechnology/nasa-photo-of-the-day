import React from "react";
import { Card, Image, Embed } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import ".././scss/App.css";

function NasaCard(props) {
  if (props.media_type === "video") {
    return (
      <div className="cardCont">
        <Card className="centered fluid card">
          <Embed url={props.url} />
          <Card.Header className="title">{props.title}</Card.Header>
          <Card.Meta>
            <span className="date">{props.date}</span>
          </Card.Meta>
          <Card.Description>{props.explanation}</Card.Description>
        </Card>
      </div>
    );
  } else {
    return (
      <div className="cardCont">
        <Card className="centered fluid">
          <Image src={props.url} wrapped ui={false} alt="Nasa API photo" />
          <Card.Header className="title">{props.title}</Card.Header>
          <Card.Meta>
            <span className="date">{props.date}</span>
          </Card.Meta>
          <Card.Description className="explanation">
            {props.explanation}
          </Card.Description>
        </Card>
      </div>
    );
  }
}

export default NasaCard;
