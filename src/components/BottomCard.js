import React from "react";
import { Card, CardText, CardBody,
  CardTitle} from 'reactstrap';
const BottomCard = ({explanation, title}) => {
    return (
      <Card className="content title subtitle bg-transparent text-warning board">
    
      <CardBody >
        <CardTitle>{title}</CardTitle>
        <CardText>{explanation}</CardText>

      </CardBody>
    </Card>
    
    );
  };


export default BottomCard;

