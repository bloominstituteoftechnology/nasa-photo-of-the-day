import React from 'react';
import styled from 'styled-components';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import './Image.css';

const StyledCardImg = styled(CardImg)`
    width: 100%;
    height: 100%;
`

const StyledCard = styled(Card)`
    width: 600px;
    height: 600px;
`

const StyledCardText = styled(CardText)`
    color: white;
`

const StyledCardTitle = styled(CardTitle)`
    color: silver;
`

export default function Image (props) {
    return (
      <div width='300px'>
        <StyledCard width='300px'>
          <StyledCardImg src={props.src} />
            <CardBody>
                <StyledCardTitle>{props.title}</StyledCardTitle>
                <StyledCardText >{props.explanation}</StyledCardText>
            </CardBody>
        </StyledCard>
      </div>
    );
}