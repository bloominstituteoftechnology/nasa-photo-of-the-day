import React from 'react';
import styled from 'styled-components';

const StyledPostHeader = styled.div `
  padding: 2% 10%;
  border-bottom: 3px solid black
`

const PostHeader = props => {

    const { image, title, date } = props;

    return (
         <StyledPostHeader>
            <div>  
              <img src={image} alt="space image from Nasa"></img> 
            </div>
            <div>
              <h2>{title}</h2>
            </div> 
            <div>
               <p>Date: {date}</p>
            </div>
        </StyledPostHeader>
    )
}

export default PostHeader;