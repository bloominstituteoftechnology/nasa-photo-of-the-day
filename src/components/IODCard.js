import React from "react";
import { Card, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import styled from "styled-components";

const Wrapper = styled.div`
    background: lightslategray;
    width: 800px;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    text-size-adjust: 1.5rem;
`;

const IODCard = (props) => {
    return (
      <Wrapper>
        <Card body className="text-center">
          <CardTitle><h1>{props.title}</h1></CardTitle>
          <CardText>{props.date}</CardText>
          <CardImg top width="100%" src={props.picture}/>
          <CardText>{props.description}</CardText>
          <Button>GO SEE NASA</Button>
        </Card>
      </Wrapper>
    );
  };
  
  export default IODCard;