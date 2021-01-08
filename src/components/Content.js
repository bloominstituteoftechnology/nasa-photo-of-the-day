import axios from 'axios'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  font-family: 'Mukta', sans-serif;
  margin: 1rem
`
const Header = styled.h1`
  font-size: 3rem;
`
const Photo = styled.img`
  width: 100%
`
const Date = styled.p`
  font-size: 1rem;
  font-color: gray;
`
const Title = styled.h2`
  font-size: 2rem;
`
const Explanation = styled.p`
  font-size: 1rem;
`
const Copyright = styled.p`
  font-size: 0.75rem;
`
function Content(props) {
  console.log(props)

  const nasaArray = (date => {
    axios.get(``)
  })
  
  return (
    <Container>
      <Header>Daily Nasa Photo</Header>
      <Photo src={props.data.url} alt='Daily Nasa'></Photo>
      <Date>{props.data.date}</Date>
      <Title>{props.data.title}</Title>
      <Explanation>{props.data.explanation}</Explanation>
      <Copyright>©{props.data.copyright}</Copyright>
    </Container>
  )
}
     
export default Content