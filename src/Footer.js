import React from 'react';
import styled from 'styled-components';



const StyleF = styled.div`
font-weight:${props =>props.theme.secondaryColor}

`
  
export default function Footer(props){

    return(
        <StyleF>
            <p>{props.footer}</p>
        </StyleF>
    )


}