import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.div`
font-size: 30px;
text-decoration: underline 5px;
color: #474044;
`
function Title() {
    return (
        <StyledTitle >
            <h1>Rachel's NASA Photo of the Day!<br></br>June 21st, 1958 - February 24th, 2017</h1>
        </StyledTitle>
    )
}
export default Title;