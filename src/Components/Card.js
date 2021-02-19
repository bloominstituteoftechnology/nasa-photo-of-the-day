import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    img{
    height: 75%;
    width: 75%;
    }
`

const Card = props =>{
    const {imgInfo} = props;
    console.log(imgInfo);
    return(
        <StyledCard>
            <img src = {imgInfo.hdurl} />
        </StyledCard>
    );
}

export default Card;