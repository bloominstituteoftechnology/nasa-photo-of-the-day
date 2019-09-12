import React from 'react';
import styled from 'styled-components'

const NasaDateP = styled.p`
margin: 0 auto;
padding: 1vh;
font-size: 1.5rem;
font-style: italic;
font-family: 'Shadows Into Light', cursive;
background: #F5F5F5;
width: 100%;


`;

const NasaDate = props => {
    return (
        <div>
            <NasaDateP><p className="date">Date: {props.date}</p></NasaDateP>
        </div>
    );
};

export default NasaDate;