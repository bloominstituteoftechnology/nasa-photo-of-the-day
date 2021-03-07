import React from 'react';
import styled from 'styled-components';
import theme from "./Theme";

 export const Container = styled.div`
background-image: url('https://i.pinimg.com/originals/65/9a/8f/659a8fef2fd8f4e46d412719046f8a85.jpg');
`



export default function Body(props){
    return (
        <Container>
            <img src = {props.image} alt = ""/>
          <p> {props.info} </p>

        </Container>
    )

    }
    