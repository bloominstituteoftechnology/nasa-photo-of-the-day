import React from 'react';
import styled, {keyframes} from 'styled-components';


const kf = keyframes`
100%{
opacity: 1;
}
`
const StyleF = styled.div`
opacity: 0;
animation: ${kf} 0.5s ease-out forward;
font-weight:${props =>props.theme.secondaryColor}

`
  
export default function Footer(props){

    return(
        <StyleF>
            <p>{props.footer}</p>
        </StyleF>
    )


}