import React, { useEffect, useState } from "react";
import styled from 'styled-components';

const Img = styled.img`
width: 30rem;
height: 30rem;
border: 0.5rem solid #fff;
object-fit: cover;
margin: 3rem auto;
`;

const Photo = (props) => {
                return (
                
                    <Img src = {props.photo} alt = 'daily astronomy'></Img>
                
                
                )

}

export default Photo