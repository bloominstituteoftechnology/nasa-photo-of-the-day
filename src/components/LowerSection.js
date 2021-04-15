import React from 'react';
import styled from 'styled-components';

// Styles
const Section = styled.section`
    color: white;
    background-color: ${pr => pr.theme.backgroundColor2};
`
const H2 = styled.h2`
    font-size: 3rem;
    text-align:center;
    padding-top: 3%;
`
const Date = styled.p`
    font-size: 1.8rem;
    text-align:center;
    color: ${pr => pr.theme.lowText}
`
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
`
const Pic = styled.img`
    display: block;
    width: 60%;
    padding: 3%;
    align:center;
`

const Explanation = styled.p`
    padding: 3%;
    margin-right: 1%;
    color: ${pr => pr.theme.highText};
`

export default function LowerSection(props){
    const {data} = props;
    return (
    <Section>
        <H2>{data.title}</H2>
        <Date>{data.date}</Date>
        <Container>
            <Pic src = {data.hdurl}></Pic>
            <Explanation>{data.explanation}</Explanation>
        </Container>
        <footer>&copy; {data.copyright}</footer>
    </Section>
    );
}