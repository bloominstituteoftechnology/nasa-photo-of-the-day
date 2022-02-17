import React from "react";
import styled from "styled-components";

const StyledInfo = styled.p`
    font-size: 2rem;
    text-align: justify;
    margin: 3%;
    margin-bottom: 1%;
    padding: 1% 0% 1% 0%;
    border-top: 1px solid ${pr => pr.theme.tertiaryColor};
    border-bottom: 1px solid ${pr => pr.theme.tertiaryColor};
`;

const Explanation = (props) => {
  return <StyledInfo>{props.explanation}</StyledInfo>;
};

export default Explanation;
