import React, {useEffect, useState} from "react";
import styled from "styled-components";

const Explanation = styled.p
`
    font-size: 15px;
`

const ApodImg = styled.img
`
    width: 100%;
    height: 500px;
    object-fit: cover;
`

const Title = styled.h2
`
   
`

const ApodCards = props => {
    return (
        <div className="apod-card">
            <ApodImg alt="astronomy picture of the day" src={props.imgUrl} />
            <Title>{props.title}</Title>
            <Explanation>{props.explanation}</Explanation>
        </div>
    );
};

export default ApodCards;