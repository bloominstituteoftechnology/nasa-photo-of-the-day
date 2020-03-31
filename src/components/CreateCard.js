import React from "react";
import styled from "styled-components";
import {
    Alert, Card, CardImg, CardText, CardBody, 
    CardTitle, CardSubtitle, Row, Col
            } from 'reactstrap';


// import "./card.css";
function Type(x) { 
    if (x === null) {
        return 'Null';
    }

    switch (typeof x) {
    case 'undefined': return 'Undefined';
    case 'boolean'  : return 'Boolean';
    case 'number'   : return 'Number';
    case 'string'   : return 'String';
    default         : return 'Object';
    }
}

function Count(word) {
    let lengthOfWord = 0;
    while(word[lengthOfWord] !== undefined)
        lengthOfWord++;
    return lengthOfWord;
}

function CreateCard (props) {
    console.log("The props from CreateCard", props);
    // var pictureDate = "";
    const pictureDate = props.dateStamp;
    // console.log(Type(pictureDate));
    // console.log("The contents of pictureDate variable", pictureDate);
    // console.log("The length of pictureDate is: ",Count(pictureDate));
    // const pictureDay = props.date.slice(props.date.length-2, props.date.length);
    // const pictureMonth = props.date.slice(props.date.length-5, props.date.length-3);
    // const pictureYear = props.date.slice(0, 3);
    // console.log("The Date is: ",pictureDay+"-"+pictureMonth+"-"+pictureYear);
    // const StyledHeading = styled.h1 ``;
    // const StyledHeadTwo = styled.h2 ``;
    const StyledDiv = styled.div `
    max-width: 90%;
    margin: 0 auto

    `;
    const StyledImage = styled.div `
        max-width: 80%;
        margin: 0 auto;
        border-radius: 15px;
        box-shadow: 3px 3px 25px 26px #ccc;
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

    const Button = styled.button`
        white-space: normal;
        max-width: 300px;
        height: 400px;
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border-radius: 5px;
        color: ${props => (!props.primary ? 'black' : 'white')};
        ${props => (props.primary ? 'background: black;' : 'background: #2196f3;')}
        &:hover {
            color: ${props => (!props.primary ? 'white' : 'black')};
            ${props => (props.primary ? 'background: #2196f3;' : 'background: black;')}
        }
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
                    <BigCardTitle>{props.title} {props.copyright === undefined ? "(No Credit given.)" : "by "+props.copyright }</BigCardTitle>
                        <CardBody>
                            <StyledImage >
                                <CardImg  src={props.url} alt=""/>
                            </StyledImage>
                                <p></p>
                                <Button primary as="a" href={props.hdurl} target= "_blank"  >HD Image (in a seperate window)</Button>
                                <div className="date">
                                    <BigCardSubTitle >Picture Description</BigCardSubTitle>
                                    <DaySubTitle>{props.dateStamp}</DaySubTitle>
                                </div>
                                <p></p>
                                <FormatText>{props.explanation}</FormatText>
                                <p></p>
                        </CardBody>
                </CenterCard>
            </Col>
        </Row>
        <p></p>
<p></p>
</StyledDiv>
    )
};

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