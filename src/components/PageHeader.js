import React, { useState } from 'react';
import styled, { keyframes } from "styled-components";

const PageHeader = () => {
    let defaultHeader = 'NASA Picture of the Day!';
    const [dfHeader, setDfHeader] = useState(defaultHeader);
    return(
    <StyledHeaderText onMouseEnter={() => {
        setDfHeader(`Remy's NASA API WebApp`);
    }}
    
    onMouseLeave={() => {
        setDfHeader(defaultHeader);
    }}>
        <h1>{dfHeader}</h1>
    </StyledHeaderText>
    )

}


const StyledHeaderText = styled.div`
color: {dfHeader = defaultHeader }




`;


export default PageHeader;
