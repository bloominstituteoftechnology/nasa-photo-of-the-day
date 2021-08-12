import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
    width: 80%;
    text-align: left;
    font-size: 1.5rem;
    border-radius: 3px;
    background-color: ${props => props.theme.dark};
    padding: 3%;
    margin: 4% 0;
`
const Footer = (props) => {
    const {nasaData} = props
    return (
        <StyledFooter>
            {nasaData.explanation}
        </StyledFooter>
    )
}
export default Footer;