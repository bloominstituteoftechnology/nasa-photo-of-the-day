import React from 'react';
import styled from 'styled-components';

const StyledPostDetails = styled.div `
  text-align: center;
`

const PostDetails = props => {

    const { date, explanation } = props;

    return (
        <StyledPostDetails>
            <div>
                <p>Date: {date}</p>
            </div>
            <div>
                <p>{explanation}</p>
            </div>
        </StyledPostDetails>
    )
}

export default PostDetails;