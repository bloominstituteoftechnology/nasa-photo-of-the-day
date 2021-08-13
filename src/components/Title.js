import React from 'react';
import styled from 'styled-components';


const StyledDiv = styled.div`

h1 {
    font-family: 'Helvetica Neue';
    font-size: 4rem;
    color: ${pr => pr.theme.primaryColor};
    background-color: ${pr => pr.theme.secondaryColor} 03;
 

}

`


function Title(props){
    return( 
        <StyledDiv>
        <h1>{props.title}</h1>
        </StyledDiv>
    )
}

export default Title