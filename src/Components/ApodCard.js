import React from "react";
import styled from "styled-components";




const StyledHeadingOne = styled.h1`
    background: #d39f16;
    color: white;
    width: 40%;
    margin-left: 30%;
    margin-top: 1%;
    padding-top: 8px;
    padding-bottom: 10px;
`;

const StyledImage = styled.img`
    width: 700px;
    height: 600px;
    margin-top: 1%;
    margin-bottom: 1%;
    border-radius: 5px;
`;

const StyledHeadingThree = styled.h3`
    color: white;
`;

const StyledParagraph = styled.p`
    width: 60%;
    color: white;
    margin-left: 20%;
`;

const StyledLogo = styled.img`
    margin-top: 1%;
`;



const ApodCard = (props) => {
    return (
        <div className="apodCard">
            <StyledLogo src="https://www.festisite.com/static/partylogo/img/logos/nasa.png"></StyledLogo>
            <StyledHeadingOne>Astronomy Picture of the Day</StyledHeadingOne>
            <StyledImage src={props.hdurl}></StyledImage>
            <StyledHeadingThree>Copyright: {props.copyright}</StyledHeadingThree>
            <StyledHeadingThree>Date: {props.date}</StyledHeadingThree>
            <StyledParagraph>Explanation: {props.explanation}</StyledParagraph>
        </div>
    )
};

export default ApodCard;