import React from 'react';
import styled from 'styled-components';


const Styledimgdiv = styled.div`

    margin: -42.88px 0px;
    background-color: #032357 ;

    h1{
       padding: 1%;
        font-family: 'Helvetica Neue';
        font-size: 4rem;
        color: ${pr => pr.theme.white};
    }

`


function Title(props){
    return( 
    
        <Styledimgdiv>
         <h1> {props.title} </h1>
        </Styledimgdiv>
        
    )
}

export default Title