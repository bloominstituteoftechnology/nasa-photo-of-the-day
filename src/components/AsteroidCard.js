import React from 'react';
import styled from "styled-components";

const Card = styled.div`
display: flex;

padding: 10px;
background-color: #343435;
`

const SpaceImage = styled.img`
width: 500px;
height: 700px;
border: 1px solid black;
`

const Content = styled.div`
margin: 0px 10px;
color: white;
`


const AsteroidCard = props => {
    return (
        <Card className="card">
            <div className="image-container">
                <SpaceImage className="space-image" alt="nebula" src={props.hdurl}/>
            </div>
            <Content className="content">
                <h2>{props.title}</h2>
                <p><span>Explanation: </span>{props.explanation}</p>
            </Content>
        </Card>
    )
}

export default AsteroidCard;

