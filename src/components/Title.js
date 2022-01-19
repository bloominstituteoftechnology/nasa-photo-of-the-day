import React from 'react';
import styled from 'styled-components';


const StyledTitle = styled.div`

display: flex;
align-items: center;
flex-direction: column;
margin-top: 20px; 
margin-left: 30px;
margin-right: 30px;
padding: 20px;
border-radius: 10px;
background-color: ${props => props.theme.PrimaryColor};

`

const Title = props => {
    const {photo} = props 
    
    return (
        <StyledTitle>
         <h1> {photo.title} </h1>
         <p>{photo.date}</p> 
            
        </StyledTitle>
  )
}

export default Title;