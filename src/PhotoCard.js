import React from "react";
import { Badge, Jumbotron } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const PhotoCard = props => {

    console.log(props);

    return (
        <>
        <div key={props.date} className="photo">
            <span>
            <Badge color="info" pill>{props.date}</Badge>
            </span>

            <img src={props.Img}/>

            <h1>
            <Badge color="dark">{props.title}</Badge>
            </h1>

            <h3>
            <Badge color="secondary" pill>
            By: {props.copyright}</Badge>
            </h3>

            <Jumbotron>
            <p className="lead">
            {props.explanation}
            </p> 
            </Jumbotron>


        </div>
        </>
    );
};

export default PhotoCard;