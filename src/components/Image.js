import React from 'react';
import styled from 'styled-components';

const StarImage = styled.div`
clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
height: 1200px;
width: 1200px;
margin: 0 auto;
`

const NasaImage = (currentStateFromParent) => {
        return (
   <StarImage>    
    <img src = {currentStateFromParent.image} alt = 'Fastest Galaxy' />
    </StarImage>
    )
}

export default NasaImage; 