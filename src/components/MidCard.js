import React from "react";
import {  Card, CardTitle} from 'reactstrap';

const Midcard = ({date}) => {
  return (
    <Card className="content bg-transparent  text-center text-warning board" >
    <CardTitle>Today is {date}</CardTitle>
   

  </Card>
  
  );
};
export default Midcard;


