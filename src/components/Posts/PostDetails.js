import React from 'react';
import styled from 'styled-components';

const StyledPostDetails = styled.div `
  text-align: center;
  font-weight: bold;
  padding: 2% 10%;
`

const PostDetails = props => {

    const { explanation } = props;

    return (
        <StyledPostDetails>
            <div>
                <p>{explanation}</p>
            </div>
        </StyledPostDetails>
    )
}

export default PostDetails;