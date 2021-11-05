import React from "react";
import styled from "styled-components";


const Container = styled.div`
    background: Peach;
    width: 800px;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    text-size-adjust: 1.5rem;
`;
const nasaImage = styled.div`
    img{
        max-width: 400px;
    }
`;  

export default function Image(props) {
return(<div>  
    <img  src = {props.image}/>
    </div>)
    };  
