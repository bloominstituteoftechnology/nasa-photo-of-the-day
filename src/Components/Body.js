import React from 'react'
import styled from 'styled-components'

import Video from './Video'

const StyledBody = styled.div`
    width: 60%;
    padding: 3%;
    border-radius: 5px;
    background-color: ${props => props.theme.tersh};
`

const Body = (props) => {
    const { nasaData } = props
    
    return (
        <StyledBody>
            <Video url ={nasaData.url}/>
        </StyledBody>
    )
}
export default Body