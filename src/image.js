import React from "react"
import styled from "styled-components"

export function Image(props){
    
    const {nasaData, setNasaData} = props
    console.log(props)
    if (nasaData === ""){
        return (<div>
             Loading...
            </div>)
    }

    return (
        <StyledContainer>
            <StyledHeading>{nasaData.title}</StyledHeading>
            <StyledDate>{nasaData.date}</StyledDate>
            <p>{nasaData.mediatype}</p>
            <StyledImage src={nasaData.url}  alt = {nasaData.copyright}/>
            <StyledExplanation>{nasaData.explanation}</StyledExplanation>
        </StyledContainer>
        );
    }




const StyledContainer = styled.div`
width:100%;
`
const StyledHeading = styled.h1`
color: skyblue;
font-weight: bold;
font-size: 3rem;
&:hover{
color: green;
transition:all 1s ease-in;
}
`
const StyledDate =styled.p`
font-size: 1.5rem;
font-weight:bold;
color: grey;
&:hover{
color: yellow;
font-size:3rem;
transition:all 1s ease-in;
}
`
const StyledImage = styled.img`
width:50%;
&:hover{
width:75%;
transition:all 1s ease-in
}
`
const StyledExplanation = styled.p`
font-size:1.5 rem;
font-weight:bold;
text-align:center;
padding:2px;




`




















