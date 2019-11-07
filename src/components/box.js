import React from "react";
import styled from "styled-components";


const BoxTitle = styled.h1`
  font-size: 40px;
  text-align: center;
  margin: 3%;
`;
const BoxImg = styled.img`
    width: 50%;
    height: 50%;
    border: 5px solid black;
    @media (max-width: 800px){
        width: 100%;
        height: 100%;
`;

const BoxText = styled.div`
    color: white;
    text-align: center;
    padding-left: 20%;
    padding-right: 20%;
    border: 2px solid black;
`;


const Box = (props) => {
    return(
        <div>
            <h1>
                {props.title}
            </h1>
            <h2>
                {props.date}
            </h2>
            <BoxImg src = {props.url} alt="BIG PICTURE GOES HERE"/>
        <BoxText>
            <h3>
                <BoxTitle>Additional Information</BoxTitle>
            </h3>
            <p>
            {props.explanation}
            </p>
        </BoxText>
        </div>
    );
};

export default Box;