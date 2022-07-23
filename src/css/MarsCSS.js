import styled from 'styled-components'


const MarsButtonsContainer = styled.div`
    box-shadow: 0 0 10px;
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    border-radius: 10%;
    height: 40vh
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
    border: 1px solid;
    width: 29%;
    margin: 2%;
    padding-bottom: 2%;
    border-radius: 30px;
    box-shadow: 0 0 10px;
`

const Img = styled.img`
    width: 80%;
`

const MarsH2 = styled.div`
font-size: 3rem;
color: white;
`

const Para = styled.p`
color: white;
`


export {MarsButtonsContainer, Button, Container, Img, MarsH2, Para}