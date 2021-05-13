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

const Header = props => {

    const {   } = props;

    return (
        <StyledHeader>
            <h1>Nasa Photo of the Day</h1>
        </StyledHeader>

        // <div className='.App-header'>
        //     <h1>NASA Photo of the Day</h1>
        // </div>

    )


}

export default Header;