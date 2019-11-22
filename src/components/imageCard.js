import React from 'react';
import { Card,  CardText, CardBody, CardTitle, CardSubtitle, InputGroup,Input} from 'reactstrap'; 
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
                            <CardTitle>Pick a date</CardTitle>
                                <InputGroup>
                                    <Input
                                    type="date"
                                    onChange={props.handleChange}
                                    />
                                </InputGroup>

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
 