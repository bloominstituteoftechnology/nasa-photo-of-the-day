import React from "react";
import {  Card, CardTitle} from 'reactstrap';

const Midcard = ({date}) => {
  return (
    <Card className="date-text" body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
    <CardTitle>Today is {date}</CardTitle>
   

  </Card>
  
  );
};
export default Midcard;


