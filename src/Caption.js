import React from "react";
import styled from 'styled-components';


const Info = styled.p`
    width: 50%;
    margin: auto 3rem;
    text-align: justify;
    text-justify: auto;
`;

const Caption = (props) => {
    return (
        <Info>{props.caption}</Info>
    )
}

export default Caption