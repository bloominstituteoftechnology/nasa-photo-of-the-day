import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.div`
text-align: center;
background: black;
color: white;
`

const ExplStyle = styled.div`
background-color: lightgrey;
width: 80%;
margin: auto;
margin-bottom: 15px;
padding: 10px;
text-align: left;
border-radius: 10px;
border: 1px solid black;
box-shadow: 5px 5px 5px white;
color: black;
`

const Title = props => {
    return (
        <HeaderStyle>
            <h1>{props.title}</h1>
            <p>{props.date}</p>
            <ExplStyle>
            <p>{props.explanation}</p>
            </ExplStyle>
        </HeaderStyle>
    );
};

export default Title;