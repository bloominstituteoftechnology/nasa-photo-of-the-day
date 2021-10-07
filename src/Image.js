import React from 'react'
import styled, { keyframes } from 'styled-components';

const ImageStyledDiv = styled.div`
  
  box-sizing:border-box;

  img{
      width:100%;
      height:auto;
  }
`

const Image = (props) => {

    // const [ image, setImage ] = useState(null);
    const image  = props.data.url;
    
    
    return (
        <ImageStyledDiv className = "image-container">
            <img src={image} alt='something'/>
        </ImageStyledDiv>
    )
}

export default Image;