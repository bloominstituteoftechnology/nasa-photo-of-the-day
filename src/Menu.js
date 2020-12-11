import React from 'react'
import styled from 'styled-components'

//styles
const StyledMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  a {
    display: inline-block;
    padding: 3px 5px;
    margin: 5px;
  }

`


export default function Menu() {
  return (
    <StyledMenu className="menu-container">
      <a href='localhost:3000'>More Photos Of The Day</a>
      <a href='https://apod.nasa.gov/apod/lib/about_apod.html'>About APOD</a>
    </StyledMenu>
  )
}
