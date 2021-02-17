import React from 'react'
import styled from 'styled-components'

const Paragraph = styled.p`
    width: 60%;
    margin: 2rem auto;
    padding: 1rem;
    text-align: justify;
    line-height:1.5;
    border: 5px solid #321C4F;
    background: #AE9BC9;
    color:black;
`

const Explanation = props => {

    const {explanation} = props

    return (
        <div>
            
            <Paragraph>{explanation}</Paragraph>
            
        </div>
    )
}

export default Explanation