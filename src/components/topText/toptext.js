import React from 'react';
import styled from 'styled-components';




const TextStyle = styled.div`
width:90%;
text-align:center;
margin:auto;
h1{
    &:hover{ 
    transition: all 0.5s ease-in-out ;
    color:red;
    }
    transition: all 0.5s ease-in-out ;
}

`;


const TextOnTop = props =>{
    const { title, date } = props;

    return (
        <TextStyle className='textTop'>
            <h1>{title}</h1>
            <p>Picture date: {date}</p>
        </TextStyle>
    )
}

export default TextOnTop;