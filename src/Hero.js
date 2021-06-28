import React from 'react'
import { Jumbotron, Container } from 'reactstrap';
import styled from 'styled-components'

const Hero = () => {

  return (
    <Style>
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="header-title">Hello!</h1>
            <a href="#card" className="header-btn">Click here to see a photo of space from the day I was born!</a>
          </Container>
        </Jumbotron>
      </div>
  </Style>
  )
}

export default Hero


const Style = styled.div`
  background-color: papayawhip;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`