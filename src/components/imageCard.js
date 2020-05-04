/* eslint-disable jsx-a11y/img-redundant-alt */
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
                    {(props.author) ? (
                        <CardSubtitle>-by {props.author}</CardSubtitle>
                        ) : (
                         <CardSubtitle>-by Nasa Photographer </CardSubtitle>
                         )}
                        <br></br>
                        <CardTitle>Pick a date</CardTitle>
                     <div className='input-div'>
                     <InputGroup>
                            <Input
                            type="date"
                            onChange={props.handleChange}
                            />
                        </InputGroup>
                     </div>

                </CardBody>
                <div className="image-and-desc-div">
                    <div className="image-div box">
                        <img width="100%" src={props.picture} alt="Card photo-of-the-day" />
                    </div>
                    <CardBody className="description box">
                        <StyledP>
                            {/* <h2>{props.titleOf}</h2> */}
                            <CardText>{props.description}</CardText>
                        </StyledP>
                    </CardBody>
                </div>
             </StyledDiv>
        </Card>
    </div>

  );
};

export default ImageCard;
 