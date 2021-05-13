import React from 'react';
import styled from 'styled-components';

const StyledPostHeader = styled.div `
  padding: 2%;
  text-decoration: underline;
`

const PostHeader = props => {

    const { title, image  } = props;

    return (
         <StyledPostHeader>
            <div>  
              <img src={image} alt="space image from Nasa"></img> 
            </div>
            <div>
              <h2>{title}</h2>
            </div> 
        </StyledPostHeader>
    )
}

export default PostHeader;