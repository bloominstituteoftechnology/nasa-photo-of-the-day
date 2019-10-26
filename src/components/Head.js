import React from "react";
import styled from "styled-components";


const BackgroundContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const InfoContent = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ImgTitle = styled.h1`
    color: white;
`;

const ImgDate = styled.h2`
    color: white;
`;

const Tag = styled.h3`
    color: white;
`;

const ImgDetails = styled.p`
    color: white;
`;

const Image = styled.img`
    width: 90%;
    border: 2px solid white;
    border-radius: 15px;
`;

const Head = (props) => {
    return(
        <BackgroundContent>
            <ImgTitle>
                {props.title}
            </ImgTitle>
            <ImgDate>
                {props.date}
            </ImgDate>
            <Image src = {props.url} alt="NASA POTD"/>
        <InfoContent>
            <Tag>
                What this amazing image shows
            </Tag>
            <ImgDetails>
            {props.explanation}
            </ImgDetails>
        </InfoContent>
        </BackgroundContent>
    );
};

export default Head;