import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.div`
    color: crimson;
  
`

function Title(props) {
    return (
      <StyledTitle>
        <h1>NASA Photo of the Day</h1>
      </StyledTitle>
  )
}

export default Title;