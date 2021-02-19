import React from 'react'
import styled from 'styled-components'

const ContainerDiv = styled.div`
    margin: 2rem;
    text-align:justify;
`


const Details = props =>{
    
    const {data} = props
    return (
        <ContainerDiv>
            <h2>The photographer is {data.copyright}</h2>
            {props &&
            <>
              <p>{data.explanation}</p>
              <p>Photo was featured on {data.date}</p>
            </>
            }
           
        </ContainerDiv>
    )
}

export default Details