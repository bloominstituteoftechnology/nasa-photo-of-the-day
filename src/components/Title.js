import React from 'react'
import styled from 'styled-components'
import { H1 } from '../Styled/StyledTitle'

function Title(props){
    const { title, date } = props
    return(
        <>
            <h1> { title } </h1>
            <h1> { date } </h1>
        </>
    )
}


export default Title
