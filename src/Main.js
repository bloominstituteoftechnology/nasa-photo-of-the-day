import React from "react"
import styled from 'styled-components'
import Photo from './Photo'
import DateForm from './DateForm'

const StyledMain = styled.div`
 background-color: #61DAFB;

`

const Main = props => {

    const { photo } = props

    return (
    <StyledMain>
        <div className = 'main-section'>
        <DateForm/>
        <Photo
        photo = {photo}
        />
    </div>
    </StyledMain>
    
    
    )
}

export default Main