import React, {useState, useEffect} from "react";
import styled from "styled-components";

const Title = (props) => {
    const { apod } = props
    return (
        <StyledTitle>
    <div>
        <h1>{apod.title}</h1>
    </div>
    </StyledTitle>
    )
}

export default Title

const StyledTitle = styled.div`
    h1{
        color: ${(pr) => (pr.theme.extraColor)};
        display:flex;
        align-items:center;
        justify-content:center;
        font-family: Arial;
        font-weight:bold
    }
`