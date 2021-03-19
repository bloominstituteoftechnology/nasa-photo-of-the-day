import React from "react";
import styled from 'styled-components'


// Styled Components are built outside of the component they serve
// Capitalize the Styled Component
// Dont forget semi-colons

const StyledImage = styled.img`
    width: 50%;
    border-radius: 20px;
    border: 15px inset #A0A0A0;
    animation: fadeIn ease 10s;

@keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
}

&:hover {
    animation: rotation 2s infinite linear;
    @keyframes rotation {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

}
`


const Img = props => {        // Img = the props function, which is an object destructuring of 'image', which then equals props itself.
    const {image} = props
    return (   // props returns: 
        <StyledImage
            alt = 'APOD'
            className = 'idkyet'
            src = {image}   
        /> 
    )
}

// const Img = props => {        // Img = the props function, which is an object destructuring of 'image', which then equals props itself.
//     const {image} = props
//     return (   // props returns: 
//         <StyledImage>
//             alt = 'APOD'
//             className = 'idkyet'
//             src = {image}   
//         </StyledImage> 
//     )
// }

export default Img;