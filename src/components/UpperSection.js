import React from 'react';
import Pictures from "./Pictures";
import styled from 'styled-components';

// Styles
const Section = styled.section`
    color: white;
`
const Header = styled.div`
    text-align: center;
    font-size: 4rem;
    padding: 1% 0;
    background-color: ${pr => pr.theme.backgroundColor2};
`
const H1 = styled.h1`
    font-size: 3rem;
    text-align:center;
    margin-bottom: 2%;
`
const P = styled.p`
    font-size: 1.7rem;
    padding: 5%;
`
const SpanLightGrey = styled.span`
    color: ${pr => pr.theme.lowText};
    text-decoration: none;
`
const SpanHighlight = styled.span`
    color: ${pr => pr.theme.highlights};
`
const UpperSectionContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 5% 0;
`
const ExplanationContainer = styled.div`
    // border: 2px solid royalblue;
    width:45%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`
// Done with styles


// Final UPPER section
export default function UpperSection(props){
    const { pictures } = props;
    return(
        <Section>
            <Header>USING NASA'S APOD <SpanHighlight>API</SpanHighlight></Header>
            <UpperSectionContainer>
                <ExplanationContainer>
                    <H1>WHAT THIS SITE IS</H1>
                    <SpanLightGrey><P>Everyday, NASA realeases a new image through their "Astronomy Picture of the Day" API. <a href = 'https://api.nasa.gov/#apod' target = 'blank'>See their documentation here.</a> The API returns feedback through a data object that has keys containing the picture itself, the date it was taken, an explanation of what the picture is, and much more. This site's purpose is to take the information given from NASA's API and display it. Nothing aside from the header, and this paragraph are hard coded, and if you were to open this website on any other day all the information below would be different.</P></SpanLightGrey>
                </ExplanationContainer>
                {<Pictures pictures = {pictures}/>}
            </UpperSectionContainer>
        </Section>
        );
}