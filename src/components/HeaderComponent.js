import React from 'react'
import styled from 'styled-components'
import {Button} from 'reactstrap'

const StyleHeader = styled.div`
    width: 80%;
    font-weight: bold;
    
    &:hover {
        color: yellow;
        background-color: cyan;
        transition: all 0.5s ease-in-out;
    }

`

export default function HeaderComponent(){

    return (
        <StyleHeader>
            <h1>Awsome picture from NASA</h1>
            <Button color = "warning"> Information </Button>
            <Button color = "success"> Social Media </Button>
            <Button color = "info"> Contact </Button>
        </StyleHeader>
    )
}