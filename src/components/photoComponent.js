import React from "react";
import App from "../App";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

function CreatePhoto(props){

    return(
        <div className="photoContainer">
            <Card>
                <CardImg top width="100%" src={props.obj.url}/>
                <CardBody>
                    <CardTitle>{props.obj.title}</CardTitle>
                    <CardSubtitle>{props.obj.date}</CardSubtitle>
                    <CardText>{props.obj.explanation}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

export default CreatePhoto;