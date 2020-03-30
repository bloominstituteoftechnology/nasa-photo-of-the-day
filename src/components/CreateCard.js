import React from "react";
import styled from "styled-components";
import {
    Alert, Card, CardImg, CardText, CardBody, 
    CardTitle, CardSubtitle, Button, Row, Col
            } from 'reactstrap';


// import "./card.css";


function CreateCard (props) {
    console.log("The props from CreateCard", props);
    const StyledHeading = styled.h1 ``;
    const StyledHeadTwo = styled.h2 ``;
    const StyledDiv = styled.div `
    max-width: 90%;
    margin: 0 auto

    `;
    const StyledImage = styled.div `
        max-width: 80%;
        margin: 0 auto;
    `;
    const CenterCard = styled(Card)`
        margin: 0 auto;
        `;
    const FormatText = styled(CardText)`
        width: 70%;
        margin: 0 auto;
        text-align: left;
    `;

    const BigCardTitle = styled(CardTitle)`
        font-size: 30px;
        color: black;
    `;
    const BigCardSubTitle = styled(CardSubtitle)`
        font-size: 20px;
        text-align: left;
        width: 70%;
        margin: 0 auto;
    `;
    const DaySubTitle = styled(BigCardSubTitle)`
        font-size: 15px;
    `;

    return (
/*Styling
Center card/image
increase size of Title, center text

*/


    <StyledDiv>
        <Row>
            <Col sm="12">
                <CenterCard>
                    <BigCardTitle>{props.title} {props.copyright === undefined ? "(No Credit given.)" : "by"+props.copyright }</BigCardTitle>
                        <CardBody>
                            <StyledImage >
                                <CardImg  src={props.url} alt=""/>
                            </StyledImage>
                            
                                <p></p>
                                <div className="date">
                                    <BigCardSubTitle >Description</BigCardSubTitle>
                                    <DaySubTitle>{props.date}</DaySubTitle>
                                </div>
                                <br></br>
                                <p></p>
                                <FormatText>{props.explanation}</FormatText>
                                <p></p>
                        </CardBody>
                </CenterCard>
            </Col>
        </Row>
    </StyledDiv>
)
}

export default CreateCard;

// return (
//     <div>
//         <h1>{props.title} by {props.copyright}</h1>
//         <div className="imgSingle">
//             <img  src={props.url} alt=""/>
//         </div>
//             <p></p>
//             <div className="date">
//                 <h2 >Description</h2>
//                 <p>{props.date}</p>

//             </div>
//             <br></br>
//             <p></p>
//             <p></p>
//             <p className="paraDesc">{props.explanation}</p>
//         </div>
// )
// }