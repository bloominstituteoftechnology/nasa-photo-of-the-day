import React from 'react';
import styled from 'styled-components';


const StyledInfo = styled.div`
  
  display: flex;
  justify-content: center;
  margin-top: 15px;
  border: 2px solid;
  padding: 8px;
  margin-bottom: 20px;
  margin-left: 50px;
  margin-right: 50px;

  background-color: ${props => props.theme.SecondaryColor};

`

const Information = props => {
    const {photo} = props 
    
    return (
        <StyledInfo>
           {photo.explanation}
            
        </StyledInfo>
  )
}

export default Information;