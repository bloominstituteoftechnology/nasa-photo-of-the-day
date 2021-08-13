import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
background-color: #032357;
margin:  -26.56px 0;


h2{
    padding-top: 4%;
    font-size: 2rem;
}
h3{
    margin-top: -17px;
}
p{
    margin: 0 17.5%;  
    padding:  2%;
}
`
const StyleDiv2 = styled.div`
border: black 1px solid;
margin: 0 25%;

`

function Explanation(props){
    return(
        <StyledDiv>
            <h2>{props.copyright}</h2>  
            <h3>{props.date}</h3>
            <StyleDiv2>
            </StyleDiv2>
            <p>{props.explanation}</p>
            <h6>{props.version}</h6>
        </StyledDiv>
    )

}
export default Explanation
