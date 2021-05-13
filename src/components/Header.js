import React from 'react'
import styled from 'styled-components';
const StyledHeader = styled.div `
color:${pr => pr.theme.secondaryColor};
background-color: ${pr => pr.theme.backgroundColor};
`
const StyledAnchor = styled.a`
font-size:${pr=>pr.theme.thirdSize};
padding: ${pr=>pr.theme.padding.large}
`
export default function Header(props){
    const {data} = props;
    return (
        <StyledHeader className='header'>
            <h1> {data.title}</h1>
            <div className ='navigation'>
                <StyledAnchor href ='#home'>Home </StyledAnchor>
                <StyledAnchor href ='#about'> About </StyledAnchor>
                <StyledAnchor href ='#data'> Data </StyledAnchor>
            </div>
        </StyledHeader>
    )
}