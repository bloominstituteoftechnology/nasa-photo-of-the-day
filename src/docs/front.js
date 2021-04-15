import React from "react";
import styled from 'styled-components';

const StyledFront = styled.div`
    background: #262626;
    font-family: Helvetica;
    letter-spacing: -0.5pt;
    line-height: 10px;
    text-align: left;
    color: white;
    padding: 30px;
    margin: 30px;
`

const StyledSection = styled.section`
    margin-top: 50px;
    margin-bottom: 50px;
`

function Front ({image, title, date, explanation}) {
    return (
        <StyledFront>
            <h1 style={{ textTransform: 'uppercase', marginBottom: '50px', marginTop: '30px'}} >astronomy photo of the day</h1>
            <iframe width='600' height='400' src={image} type='video' alt='nasa image of the day' />
            <StyledSection>
                <h2>{title}</h2>
                <h3>{date}</h3>
                <h4>{explanation}</h4>
            </StyledSection>
        </StyledFront>
    )
}

export default Front