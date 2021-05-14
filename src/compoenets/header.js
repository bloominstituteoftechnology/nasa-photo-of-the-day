import React from 'react'
import styled from 'styled-components'

const Styledhead = styled.div`

    background-color:${props => props.theme.tertiaryColor};
    border: 5px solid ${props => props.theme.black}


`


const Head = function (props) {
    const { date, title } = props
    return (
        < Styledhead >
            < h1 > Behold Tomorrow</h1 >
            <div>
                <h2>{title}</h2>
                <p>Nasa Photo Of The day {date}</p>
            </div>
        </Styledhead >)
}

export default Head;