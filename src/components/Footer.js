import React from 'react';
import styled from 'styled-components';


export default function Footer({copyright}){
    return(
        <StyledFooter className='footer'>
            <p>Copyright by {copyright}</p>
        </StyledFooter>
    )
}

//styled component
const StyledFooter = styled.div`
    color: white;
    background-Color: black;
    margin: 0;
`;