import React from 'react'
import styled from 'styled-components'

function Photo(props) {
  console.log(props)

  const Container = styled.div`
    font-family: 'Mukta', sans-serif;
  `
  const Header = styled.h1`

  `
  const Date = styled.p`

  `
  const Title = styled.h2`

  `
  const Photo = styled.img`

  `
  const Copyright = styled.p`

  `
  const Explanation = styled.p`

  `
  return (
    <Container>
      <Header>Daily Nasa Photo</Header>
      <Date>{props.data.date}</Date>
      <Title>{props.data.title}</Title>
      <Photo> src={props.data.url} alt='Daily Nasa'</Photo>
      <Copyright>{props.data.copyright}</Copyright>
      <Explanation>{props.data.explanation}</Explanation>
    </Container>
  )
}

export default Photo