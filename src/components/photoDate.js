import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";

const APODDate = styled.p`
    font-family: 'Space Mono', monospace; `;

const PhotoDate = props => {
    console.log(`PhotoDate: props: `, props);
    return (
        <div>
    <APODDate>Date Posted: {props.date}</APODDate>
    <Button color="primary" onClick={props.changeDate}>Change Date</Button>
    </div>)
    ;
  };
  
  export default PhotoDate;