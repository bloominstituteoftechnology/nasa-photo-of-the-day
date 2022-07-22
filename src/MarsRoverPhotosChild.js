import react from  'react'
import styled from 'styled-components'
import {Container, Img} from './css/MarsCSS'

function MarsPhotos(props){
    const {img, camera} = props
    return(
        <Container>
        <p>Picture taken from: {camera}</p>
        <Img src = {img}></Img>
        </Container>
    )
} 

export default MarsPhotos