import React, { useState } from 'react';
import styled from 'styled-components';

const Click = styled.button`
border-radius: 10px;
background: linear-gradient(#03071e, #ffba08);
border: #03071e;
color: #ffba08;
font-size: 2rem;
font-family: 'Orbitron', sans-serif;
`

export default function Button (props) {
    
    const{ title, photo } = props;
    const [toggle, setToggle] = useState(false);
    const showPic = () => setToggle(!toggle);

    
    return (
        <div class='click'>
        <Click onClick={showPic}>{!toggle ? 'Amaze Me!' : showPic }</Click>
        {toggle && <img src={photo} alt={title}/>}
        </div>
    )
}