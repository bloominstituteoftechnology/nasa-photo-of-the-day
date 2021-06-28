import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import styled from 'styled-components';

const PhotoCard = ({ text, title, img}) => {

  return (
  
  <Style>
    <div id="card">
      <Card>
        <CardImg top src={ img } alt="a fun photo from space" className="img-fluid" />
        <CardBody>
          <CardTitle tag="h5">{ title }</CardTitle>
          <CardText>{ text }</CardText>
        </CardBody>
      </Card>
    </div>
  </Style>

  )
}

export default PhotoCard

const Style = styled.div`
  background-color: palevioletred; 
`
//style not working - fix this 
