import React from "react";
import styled from 'styled-components';

const TitleP = styled.p`
    font-size: 100px;
    color: blue;
`;

const DateP = styled.p`
    font-size: 50px;
    color: red;
`;

const ImgContainer = styled.img`
    width: 50%;
    height: 50%;

`;


function NasaCardContainer({title, date, hdurl, explanation}){
    
    return (
        
        <div>
            <TitleP>{title}</TitleP>
            <DateP>{date}</DateP> 
            <ImgContainer src = {hdurl}/>
            <p>{explanation}</p>
        </div>
    )
}

export default NasaCardContainer;