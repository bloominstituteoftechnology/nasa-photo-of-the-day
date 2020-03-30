import React from "react";
import styled from "styled-components";
import {
    Card, CardImg, CardText, CardBody, 
    CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';


// import "./card.css";


function CreateCard (props) {
    console.log("The props from CreateCard", props);
    const StyledHeading = styled.h1 ``;
    const StyledHeadTwo = styled.h2 ``;
    const StyledDiv = styled.div `
    max-width: 90%;

    `;
    const StyledImage = styled.div `
    max-width: 80%;
    margin: 0 auto;
    `;
    const CenterCard = styled(Card)`
        margin: 0 Auto;
        `;
    return (
/*Styling
Center card/image
increase size of Title, center text

*/


    <StyledDiv>
        <Row>
            <Col sm="10">
        <Card>
            <CardTitle>{props.title} by {props.copyright === undefined ? "unknown" : props.copyright }</CardTitle>
                <CardBody>
                    <StyledImage >
                        <CardImg  src={props.url} alt=""/>
                    </StyledImage>
                    
                        <p></p>
                        <div className="date">
                            <CardSubtitle >Description</CardSubtitle>
                            <p>{props.date}</p>

                        </div>
                        <br></br>
                        <p></p>
                        <p></p>
                        <CardText className="paraDesc">{props.explanation}</CardText>
                </CardBody>
        </Card>
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