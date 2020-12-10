import React, { useState } from 'react';
import styled from 'styled-components';
import { Card, CardBody, CardTitle, CardText, CardHeader } from 'reactstrap';
import CardImage from './cardimg';

function CardMain({ copyright, date, explanation, title, url }) {
  return (
    <StyledCard>
      <Card className='card'>
        <CardHeader tag='h1'>NASA Photo of the Day</CardHeader>
        <CardImage url={url} />
        <CardBody>
          <CardTitle tag='h2'>{title}</CardTitle>
          <CardText>{date}</CardText>
          <CardText>{explanation}</CardText>
          <CardText>
            <small tag='text-muted'>© {copyright}</small>
          </CardText>
        </CardBody>
      </Card>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  margin: 30px auto;
  border: 1px solid #d2d2d2;
  box-shadow: 0px 1px 10px -2px #807f7f;
  border-radius: 20px;
  width: 35%;

  .card {
    background-color: whitesmoke;
  }
`;

export default CardMain;
