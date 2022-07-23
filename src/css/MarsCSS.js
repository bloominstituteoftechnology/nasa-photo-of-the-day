import styled, {keyframes} from 'styled-components'


const MarsButtonsContainer = styled.div`
    box-shadow: 0 0 10px blue;
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    border-radius: 10%;
    height: 50Svh
    `

const Button = styled.button`
   cursor: pointer;
    display: inline;
    margin: 0 auto;
    width: 50%;
    padding: 1%;
    border: 1px solid blue;
    color: white;
    transition: transform 500ms;
    &:hover{
        color: blue;
        border: 2px solid white;
        transform: scale(1.05)
    }
    `

const Container = styled.div`
    display: inline-block;
    width: 29%;
    margin: 2%;
    padding-bottom: 2%;
    border-radius: 30px;
`

const Img = styled.img`
    width: 80%;
    box-shadow: 0 0 10px white;
`

const MarsH2 = styled.div`
font-size: 3rem;
color: white;
width: 50%;
margin: 0 auto;
`

const Para = styled.p`
color: white;
width: 50%;
margin: 0 auto;
padding: 1%
`

const Para2 = styled.p`
color: white;
width: 50%;
margin: 0 auto;
padding: 1%;
margin-top: 2%
`

const MarsRoverCamera = styled.p`
color: white;
font-size: 1.6rem
`

const DateInput = styled.input`
color: white;
width: 12%;
margin: 0 auto;
padding: .3%;
background-color: blue;
margin-bottom: 1%;
`


export {MarsButtonsContainer, Button, Container, 
    Img, MarsH2, Para, MarsRoverCamera, DateInput, Para2}