import React from 'react';
import styled from 'styled-components';

const StyledPhoto = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  border: 2px solid;
  padding: 8px;
  margin-left: 100px;
  margin-right: 100px;

  background-color: ${props => props.theme.SecondaryColor};

`

const Photo = props => {
    const {photo} = props 
    
    return (
        <StyledPhoto>
          <div>
           <img  src= {photo.hdurl} alt='space' />
           </div>
        </StyledPhoto>
  )
}

export default Photo;