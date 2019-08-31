import React from "react";
import styled from "styled-components"

const Title = () => {

    const Span = styled.span`
        color: red;
    `
    return(
        <h1> NASA PHOTO OF THE <Span>DAY!</Span></h1>
    )
}

export default Title;