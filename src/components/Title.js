import React from 'react'
import styled from 'styled-components'

const TitleWrap = styled.h2`
    font-size: 1.75rem;
    color:lightgray;
`

const DateWrap = styled.p`
    font-size: 1.25rem;
    color:lightgray;
`

const Title = props => {

    const {title, date} = props
    console.log(`dailyTitle`, title)
    // console.log(`title`, props.dailyTitle.title)

    return (

        <div>
            <TitleWrap>{title}</TitleWrap>
            <DateWrap>{date}</DateWrap>
        </div>

    )

}

export default Title