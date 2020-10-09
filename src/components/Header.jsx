import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
    *{
        /* border: 2px solid lightgray; */
    }
    display: flex;
    align-items: center;
    h1{
        position: absolute;
        text-align: center;
        width: 100%;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 3rem;
    }
`

const PageHeader = (prop) => { 
    const {headerData} = prop //deconstructing
    return (
        <StyledHeader>
            <div>
                <img src='https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg'/>
            </div>
            <h1>~Le Nasa Photo of ze Day~</h1>
        </StyledHeader>
    )
}

export default PageHeader;