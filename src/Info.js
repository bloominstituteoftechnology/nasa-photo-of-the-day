import React from 'react';
import {DivWrapper} from './Example';
import styled from 'styled-components';
const P2head = styled.h2`
 text-align: center;
 color: blue;
`;
function Info(props){
return (
    <DivWrapper >
       <P2head>{props.item.title}</P2head> 
       <p>{props.item.explanation}</p>
       <p>{props.item.hdurl}</p>
    </DivWrapper>
)
}
export default Info;