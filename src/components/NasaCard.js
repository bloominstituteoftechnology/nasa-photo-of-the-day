import React from "react";
import { Card, Image, Embed, Modal, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import ".././scss/App.css";
import styled from "styled-components";

const Button = styled.button`
  @import url("https://fontlibrary.org/face/space-meatball");
  background-color: rgba(0, 0, 0, 0.7);
  border: 2px solid #91457c;
  width: 50%;
  padding: 1em 0;
  margin: 1em auto;
  color: #a8cae1;
  font-size: 1.2em;
  font-family: "SpaceMeatballRegular";

  &:hover {
    box-shadow: 2px 5px 8px cyan;
    cursor: pointer;
  }
`;

function NasaCard(props) {
  if (props.media_type === "video") {
    return (
      <div className="cardCont">
        <Card className="centered fluid card">
          <Embed className="cardVid" url={props.url} />
          <Card.Header className="title">{props.title}</Card.Header>
          <Card.Meta>
            <span className="date">{props.date}</span>
          </Card.Meta>
          <Modal trigger={<Button>More Info</Button>}>
            <Modal.Header
              style={{
                textAlign: "center",
                color: "#2059A6",
                fontSize: "1.2em",
                fontFamily: "SpaceMeatballRegular"
              }}
            >
              {props.title}
            </Modal.Header>
            <Modal.Content>
              <Modal.Description
                style={{
                  textAlign: "center"
                }}
              >
                <Header>{props.date}</Header>
                <p>{props.explanation}</p>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </Card>
      </div>
    );
  } else {
    return (
      <div className="cardCont">
        <Card className="centered fluid">
          <Image
            className="cardImg"
            src={props.url}
            wrapped
            ui={false}
            alt="Nasa API photo"
          />
          <Card.Header className="title">{props.title}</Card.Header>
          <Card.Meta>
            <span className="date">{props.date}</span>
          </Card.Meta>
          <Modal trigger={<Button>More Info</Button>}>
            <Modal.Header
              style={{
                textAlign: "center",
                color: "#2059A6",
                fontSize: "1.2em",
                fontFamily: "SpaceMeatballRegular"
              }}
            >
              {props.title}
            </Modal.Header>
            <Modal.Content>
              <Modal.Description
                style={{
                  textAlign: "center"
                }}
              >
                <Header>{props.date}</Header>
                <p>{props.explanation}</p>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </Card>
      </div>
    );
  }
}

export default NasaCard;
