import React from 'react'
import styled from 'styled-components'

const Title = (props) => {

    const { data } = props

    const Title = styled.h1`
        text-align: center;
        color: #eeeeee;
    `

    return (
        <Title>Photo of the Day: {data.title} </Title>
    )
}

export default Title