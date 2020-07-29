import React from "react";
import styled from "styled-components";

function AppCard(props){
    return(
        <>
            <CardTitle>{props.title}</CardTitle>
            <h4>{props.date}</h4>
            <ImgCont src={props.PotD}/>
            <CardDesc>{props.desc}</CardDesc>
        </>
    )
}
const CardTitle = styled.h2`
    font-size: 4rem;

`;
const ImgCont = styled.img`
    width:80%;
    margin:0 auto;
    border-radius: 1.5rem;
`;
const CardDesc = styled.p`
    width: 70%;
    margin: 1.5rem auto;
    padding: 1.5rem;
    background-color:white;
    border-radius:1.5rem;
    color: #686194;
`;

export default AppCard