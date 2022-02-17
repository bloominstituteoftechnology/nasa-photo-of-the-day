import React from "react";
import styled from "styled-components";

const StyledCopyright = styled.p`
    font-size: 1rem;
    margin-bottom: 2%;
    color: ${pr => pr.theme.tertiaryColor};
`

const Copyright = (props) => {
  return <StyledCopyright>Photo Copyright of: {props.copyright}</StyledCopyright>;
};

export default Copyright;
