import React from "react";
import { Card, CardTitle, CardText} from 'reactstrap';






const CardCenter = ({date}) =>{


    return(
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle>Today is</CardTitle>
        <CardText>{date}</CardText>
    
      </Card>
    );

};

export default CardCenter;