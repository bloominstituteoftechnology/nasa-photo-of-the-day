import React from "react"
import styled, { keyframes } from 'styled-components'



const StyledBody = styled.body `
background-color: ${props => props.theme.primaryColor};
`

const StyledCard = styled.div `
display: flex;
flex-direction: column;
`


const StyledHeader = styled.div`
    text-align:  ${props => props.theme.headerTextAlign};
    padding: ${props => props.theme.headerPadding};
    font-size: ${props => props.theme.headerFontSize};
`

const StyledDescription = styled.div`
    padding: 2%;
    margin-left: 20%;
    margin-right: 20%;
`

const StyledImgContainer = styled.div`
display: flex;
justify-content: center;
border-top: 8px ${props => props.theme.secondaryColor} solid;
border-bottom: 8px ${props => props.theme.secondaryColor} solid;

`

const StyledImg = styled.img `
    width: 40%;
    height: 60vh;
`


const Card = props => {
    console.log(props)
    return(
        <StyledBody>
        <StyledCard lassName="nasa-card">
            <StyledHeader  className="img-title">
            <h2> {props.title}</h2>
            </StyledHeader >
            <StyledImgContainer className="img">
            <StyledImg className = "nasa-img" alt="random" src ={props.imgUrl}/>
            </StyledImgContainer>
            <StyledDescription className = "description">
            <p>{props.description}</p>
            </StyledDescription>
        </StyledCard>
        </StyledBody>
    )
}
export default Card