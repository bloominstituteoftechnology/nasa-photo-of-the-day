import React from "react";
import styled from 'styled-components'

const HeadTitle = styled.h2`
    font size:20px;
    color:Gray;
`;

const Content = styled.p`
    color:#6F1B0A;
    font-weight:Bold;
    padding:1% 8%;
`;

function PhotoCard(props){
    console.log(props)
    return(
        <div>
            <HeadTitle>{props.Title}</HeadTitle>
            <img src={props.Url} alt="thisImage"></img>
            <Content>
                {props.explanation}
            </Content>
        </div>
    )
}
export default PhotoCard;