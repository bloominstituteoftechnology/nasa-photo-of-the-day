import React from 'react'

import styled from 'styled-components'

const Body = styled.div`
margin: 0;
padding: 2rem;
text-align: center;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const Title = styled.h1`font-weight: 600;`
const Hr = styled.hr`
width:50px;
border: none;
border-bottom: 1px solid rgba(119, 119, 119, 0.25)`

const Container = styled.div`
margin: 1rem auto;
    padding: 2rem;
    text-align: justify;
    transition: all 0.3s;
    @media screen and (max-width:600px){
            width: 100%;
            padding: 1rem;}`

    const Explanation = styled.p`
    line-height: 1.5;
    letter-spacing: 0.3px;
    word-spacing: 2px;
    
    &:: first-letter {
    color:#FE5F55;
    font-weight: bold;
    font-size: 70px;
    float: left;
    line-height: 60px;
    padding-right: 8px;
    margin-top: -3px;}
    `


    

const ExplanationCard = ({ data }) => {
    const { title, explanation } = data
    return (
        <Body>
            <Title>{title}</Title>
            <Hr />
        <Container>
            <Explanation>{explanation}</Explanation>
        </Container>
        </Body>
    )
}

export default ExplanationCard