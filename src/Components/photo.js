import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const StyledPhoto = styled.div`

  padding: 5%;
  margin: 8%;
  color: white;
  background-color: black;
  box-shadow: 50px 40px 40px grey;

`

function Photo (props) {

    const { photoDescription, photoURL} = props

    return (
        <StyledPhoto>
            <img src={photoURL} width='350px' height='500px'/>
            <p>{photoDescription}</p>
        </StyledPhoto>
    )
}

export default Photo