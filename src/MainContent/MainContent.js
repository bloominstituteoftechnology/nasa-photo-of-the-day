import React from "react";
import "./MainContent.css";
import {Container, MainContentDiv, Img, Desc} from "../Style";


function MainContent(props) {
    return (
    <Container>
        <MainContentDiv>
            <h2>You're looking at {props.title}</h2>
            <Img src={props.apod} alt={props.title}/>
            <Desc>{props.desc}</Desc>
        </MainContentDiv>
    </Container>
    )
}

export default MainContent;