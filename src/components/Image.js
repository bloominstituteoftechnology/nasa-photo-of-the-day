import React from 'react'
import styled from 'styled-components'

const ImageWrap = styled.img`
    width: 854px;
    height: 480px;
    border: 6px solid #348E8F;
`

const Image = props => {

    const {URL, title} = props

    return (
        <div>
            <ImageWrap src={URL} alt={title}/>
        </div>
    )
}

export default Image