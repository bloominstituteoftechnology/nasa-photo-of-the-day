import React from 'react'
import styled from 'styled-components'

const backgroundColor = theme('mode', {
    light: '#fafafa',
    dark: '#222'

const StyledDiv = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;;
align-content: flex-start;
justify-content: space-evenly;
padding: 10vh 0 0;
background-color: grey;
color:white;`;

const ImgDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 90%;
  max-height: 100vh;
  margin: auto;`;

const StyledImg = styled.img`
display: block;
object-fit: contain;
width: 100%;
height: 100%;
padding: 10px 10px 0px 10px;`;

const InfoDiv = styled.div`
display: flex
flex-direction: column;
max-width: 40%;
`

const StyledH1 = styled.h1`
border-bottom: 2px solid black;
`

const StyledP = styled.p`
font-size: ${props => {
        return props.small = `20px`
    }};
`

function Body(props) {
    console.log(props.data)
    return (
        <StyledDiv>
            <InfoDiv>
                <StyledH1>{props.data.title}</StyledH1>

                <p>{props.data.explanation}</p>
            </InfoDiv>
            <ImgDiv>
                <StyledImg src={props.data.url}/>
                <StyledP>{props.data.copyright}</StyledP>
                <StyledP>{props.data.date}</StyledP>
            </ImgDiv>
        </StyledDiv>
    )
}
export default Body