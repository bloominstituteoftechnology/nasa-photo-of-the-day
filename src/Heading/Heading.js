import React from 'react'
import styled from 'styled-components';

const StyledHeading = styled.div`
 h1 {
   font-size:400%;
   color: ${pr => pr.theme.white};
   background-color: ${pr => pr.theme.primaryColor};
 }

 img {
   width:70%;
   height:80%;
 }


`

export default function H(props) {
    const { title, img} = props
    
    
    return (
     <StyledHeading>
        <h1>{title}</h1>
        <img src={img} alt='the Mammatus Clouds'/>
     </StyledHeading>
    )

}


