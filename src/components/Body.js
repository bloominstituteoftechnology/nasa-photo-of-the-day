import React from "react";
import Images from "./Images";
import styled from 'styled-components';
const StyleBody = styled.div`
color:${pr => pr.theme.primaryColor};
background-color:${pr => pr.theme.backgroundColor};
`
const StyledP = styled.p`
font-size: ${pr=>pr.theme.firstSize}
`
const Styledh5 = styled.h5`
text-align: right;
color: purple;
font-size: 15px;
`
export default function Body (props){
    const {data} = props;
    return (
        <StyleBody className = 'body'>
            <Styledh5>{data.date}</Styledh5>
            <Images data = {data}/>
            <StyledP className ='explanation'>{data.explanation}</StyledP>
        </StyleBody>
    );
}