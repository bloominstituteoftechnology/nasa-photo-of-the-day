import React from "react";
import "./Paragraph.css";
import styled from 'styled-components';


const StyledParagraph = styled.p`
    margin: 0 auto;
    padding: 5% 0 5% 0;
    width: 80%;
`

function Paragraph({ paragraph }){

    return (
        <StyledParagraph>{paragraph}</StyledParagraph>
    )
}

export default Paragraph;
