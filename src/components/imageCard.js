import React from 'react';
import { Card,  CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'; 
import styled from 'styled-components'; 

const StyledHeading = styled.h1`
font-size:35px;
font-weight:bold;
color:DarkSlateBlue;
font-family: 'Amiri', serif;
`;

const StyledP = styled.p`
font-family: 'Amiri', serif;
font-size:20px;
`;
const StyledDiv = styled.div`
background:#F0F8FF;
`;


/*export default function ImageCardOLD(props) {
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
            <StyledDiv>
                <CardBody>
                    <StyledHeading>
                        <CardTitle>{props.titleOf}</CardTitle>
                    </StyledHeading>
                        <CardSubtitle>-by {props.author}</CardSubtitle>
                            <br></br>
                         <Button color="secondary" size="sm">{props.dateOf}</Button>
                </CardBody>
                    <img width="100%" src={props.picture} alt="Card image cap" />
                <CardBody>
                    <StyledP>
                        <h2>Description of the image</h2>
                        <CardText>{props.description}</CardText>
                    </StyledP>
                </CardBody>
             </StyledDiv>
        </Card>
    </div>

  );
};

export default ImageCard;
 