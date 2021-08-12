import React from 'react';
import styled, { keyframes } from 'styled-components';

const StyledTitle = styled.div`
    margin: 5% 0 0 0;

    h3 {
        font-size: 1.8rem;
    }

    h5 {
        font-size: 1rem;
    }
`

export default function PhotoHeader(props) {
    const { title, date } = props;

    return (
        <StyledTitle className='photoHeader'>
            <div className='title'>
                <h3>{title}</h3>
            </div>
            <div className='date'>
                <h5>Date: {date}</h5>
            </div>
        </StyledTitle>
    )
}
