import React from 'react';

import styled from 'styled-components';

const StyledImageDetails = styled.div `
  padding: 2% 10%;
  border-bottom: 3px solid black
`

const imagedetails = props => {

    const { image, title, date } = props;

    return (


        <StyledImageDetails>
            <div>  
              <img src={image} alt="space image from Nasa"></img> 
            </div>
            <div>
              <h2>{title}</h2>
            </div> 
            <div>
               <p>Date: {date}</p>
            </div>
            </StyledImageDetails>
            )
}

export default imagedetails;