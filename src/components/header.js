import React from 'react';
import styled from 'styled-components';


const Title = styled.h1`
font-size: 2em;
color: crimson;

&:hover{
    color: #19B5CB;
};
`;
 const Button = styled.button`
 color: #19B5CB;
 background-color: Transparent;
 padding: .5%

 &:hover{
     transform: scale(1.5);
     animation: 1s ease-in-out;
    }
    animation: 1s ease-in-out;
 }
 `


export default function Header() {
    return(
        <div>
            <Title>PHOTO OF THE DAY FROM NASA<span role="img" aria-label='go!'>🚀</span>!</Title>
            <Button onClick={() => console.log("clicked")}>Click for Photo of the Day</Button>
        </div>
        
    )
}

