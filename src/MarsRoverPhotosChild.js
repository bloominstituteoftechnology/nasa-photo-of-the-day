import react from  'react'
import {Container, Img, MarsRoverCamera} from './css/MarsCSS'

function MarsPhotos(props){
    const {img, camera} = props
    return(
        <Container>
        <MarsRoverCamera>Picture taken<br></br>from: {camera}</MarsRoverCamera>
        <Img src = {img}></Img>
        </Container>
    )
} 

export default MarsPhotos