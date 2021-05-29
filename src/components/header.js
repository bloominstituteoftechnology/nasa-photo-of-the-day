import React from 'react';

import styled from 'styled-components';

const StyledHeader = styled.div`
    background-color: #282c34;
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    
    color: white;
    /* min-height: 100vh; */
`
const Header = props => {

    const {   } = props;

    return (
        

        <StyledHeader>
             <h1>NASA Photo of the Day</h1>
        </StyledHeader>

    )


}

export default Header;