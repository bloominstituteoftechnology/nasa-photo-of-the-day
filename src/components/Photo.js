import React from 'react'
import styled from 'styled-components'

const Photo = (props) => {

    const { data } = props

    const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #222831;
    `

    const Image = styled.img`
        align-self: center;
        max-width: 50%
    `

    const Button = styled.button`
        border: none;
        padding: 10px;
        margin: 5px;
        background: #00adb5;
        width: 50%;
        color: white;

    &:hover {
        background: #393e46;
        color: white;
    }    
    `

    const Paragraph = styled.p`
        width: 50%;
        color: #eeeeee;
    `
    
    return (
        <Container>
            <Image src={data.url} />
            <Button>Generate Random Photo</Button>
            <Paragraph>{data.explanation}</Paragraph>
        </Container>
    )
}

export default Photo