import React from 'react';
import styled from 'styled-components'

const NasaDateP = styled.p`
margin: 2vh auto;
font-size: 1rem;
font-style: italic;
background: lightgrey;
width: 60vw;




`;

const NasaDate = props => {
    return (
        <div>
            <NasaDateP><p className="date">Date: {props.date}</p></NasaDateP>
        </div>
    );
};

export default NasaDate;