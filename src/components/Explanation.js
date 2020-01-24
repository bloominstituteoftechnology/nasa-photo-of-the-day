import React from "react";
import styled from "styled-components";

const TheExplanation = styled.p`
font-weight: 700;
font-family: sans-serif;
`;

const Explanation = props =>{
    return(
        <div className="exp">
<TheExplanation>{props.explain.explanation}</TheExplanation>
        </div>
    );
};

export default Explanation