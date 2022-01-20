import React from "react";
import styled from 'styled-components';

const StyledFooter = styled.div`
display: flex;
justify-content: space-evenly;
background-color: gray;
`

const Footer = props => {
    const { photo } = props

    return (
    <StyledFooter className="footer">
        <h6>Copyright: {photo.copyright}</h6>
    </StyledFooter>
    )
}

export default Footer;