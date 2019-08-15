import React from "react";
import CreateMain from "./CreateMain";
import styled from "styled-components";
import Lettering from "../components/Lettering";

const Title = styled.h1`
    font-size: 3em;
`

const Image = styled.img`
    width: 100vw;
    height: 100vh;
`;

const Date = styled.h3`
    font-size: 2em;
`;

const Blog = styled.p`
    font-size: 1.2em;
    line-height: 1.5;
    margin: 40px;
    text-align: left;
`;

const Main = props => {
    return (
        <div className="main">
            <h1>{props.title}</h1>
            <img src={props.image} />
            <h3>{props.day}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export default Main;