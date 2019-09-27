import React from 'react';
import { Card,  CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

/*export default function ImageCard(props) {
    console.log(ImageCard);
    return (
            <div 
                className="cardBox"
                key= {props.id}>
                  
                <h1> {props.titleOf}</h1>
                <p>-by {props.author}</p>

                <button
                        className="date-btn"
                    >
                    <p>{props.dateOf}</p>
                </button>

                <div className="imageBox">
                    <img 
                        className="image" 
                        alt="no pic" 
                        src={props.picture}
                    />
                </div>
                <h2>Description of the image</h2>
                <p>{props.description}</p>
             </div>
    );
};*/

const ImageCard = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{props.titleOf}</CardTitle>
          <CardSubtitle>-by {props.author}</CardSubtitle>
        </CardBody>
        <img width="100%" src={props.picture} alt="Card image cap" />
        <CardBody>
          <CardText>{props.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default ImageCard;
 