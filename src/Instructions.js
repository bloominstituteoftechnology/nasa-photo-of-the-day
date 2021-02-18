import React from 'react'
import styled from 'styled-components'

const StyledInstructions = styled.div`
  color: royalblue;
`


function Instructions(props) {
    return (
      <StyledInstructions>
        <div>
          <p>This is today's NASA Photo of the Day</p>
        </div>
      </StyledInstructions>
  )
}

export default Instructions