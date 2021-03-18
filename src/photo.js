import React from"react"
import styled from 'styled-components'

const StyledH1 = styled.h1`
weight:bold;
background-color: black;
color:white;
&:hover {
  transform: scale(1.5);
  transition: all 1s ease-in-out;
  background-color: white;
  color:black;
}
transition: all 1s ease-in-out;
`
const styledHeader = styled.header`
backgroundColor: black;
color: white;
`
const StyledImg = styled.img`
margin: 5% 15%;
&:hover {
  transform: scale(1.1);
  transition: all 1s ease-in-out;
} 
transition: all 1s ease-in-out;
`
const StyledP = styled.p`
weight:bold;
font-size:1.5rem;
margin: 0 10%;
`

const SecondStyledP = styled.p`
font-size:.75rem;
color: black;
background-color: white;

&:hover {
  transform: scale(2);
  transition: all 1s ease-in-out;
  background-color: black;
  color: white;
  weight:bold;
}
transition: all 1s ease-in-out;
`
const help = (props) =>{ 
const {help} = props
return (
    <div>  
    <header> 
      <StyledH1>{help.title}</StyledH1>
    </header>
        <StyledImg src={help.hdurl} alt ='space'></StyledImg>
        <StyledP>{help.explanation}</StyledP>
        <SecondStyledP>{help.copyright}<br></br> {help.date}</SecondStyledP>
    </div>
)
}

export default help