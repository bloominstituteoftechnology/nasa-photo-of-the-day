import React from 'react';

import styled from 'styled-components';

const StyledHeader = styled.div`
    background-color: #282c34;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    /* min-height: 100vh; */
`
const header = props => {

    const {   } = props;

    return (
        

        <StyledHeader>
             <h1>NASA Photo of the Day</h1>
        </StyledHeader>

    )


}

export default header;