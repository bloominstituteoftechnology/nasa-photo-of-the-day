import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
    h1 {
        color: ${props => props.theme.primaryColor};
        padding-top: 20px;
    }
`;

const Header = (props) => {
    return (
        <StyledHeader className='styled-header'>
            <h1>Nasa Photo of the Day</h1>
        </StyledHeader>
    )
}

export default Header;