import styled from 'styled-components'


const MarsButtonsContainer = styled.div`
    box-shadow: 0 0 10px;
    width: 20%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    `

    const Button = styled.button`
    display: inline;
    margin: 0 auto;
    width: 50%;
    padding: 1%;
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


export {MarsButtonsContainer, Button, Container, Img}