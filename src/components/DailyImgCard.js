import React from "react";
import styled from "styled-components";
// import "./DailyImgCard.css";

const ImgCard = styled.div`
    background: #a0d9d1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 2%;
`;
const ImageWrapper = styled.img`
    width: 600px;
    height: auto;
    object-fit: scale;
`;

const ImageInfo = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #b34151;
`;

const DailyImgCard = props => {
    console.log("DailyImgCard", props);
    return (
        <ImgCard>
            <ImageWrapper alt="" className="daily-pic" src={props.url} />

            <ImageInfo>
                <div className="img-title">
                    <h2>{props.title}</h2>
                </div>
                <div className="img-explanation">
                    <h3>{props.explanation}</h3>
                </div>
                <div className="img-copyright">
                    <h4>{props.copyright}</h4>
                </div>
            </ImageInfo>
        </ImgCard>
    );
};

export default DailyImgCard;
