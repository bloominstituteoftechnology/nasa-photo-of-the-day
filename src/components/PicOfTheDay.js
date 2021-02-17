import React from 'react'
import './images/NASA-logo.jpg'
import styled from 'styled-components'

const PicWrap = styled.div`
    font-size: 2.75rem;
    display: flex;
    justify-content:center;
`

const NasaIMG = styled.img`
    width: 100px;
    margin-right: 1rem;
`

const PicOfTheDay = props => {

    const {img} = props

    return (

        <PicWrap>
            <NasaIMG src={"https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"}/>
            <h1>Pic of the Day</h1>

        </PicWrap>

    )
}

export default PicOfTheDay