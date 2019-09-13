import React from 'react';
import styled from 'styled-components'
import { Button } from 'reactstrap';

const NasaDateP = styled.p`
padding: 0;
font-size: 1.5rem;
font-style: italic;
font-family: 'Shadows Into Light', cursive;
background: #E0FFFF;
width: 100%;


`;


const NasaDate = props => {
    return (
        <div>
            <a href ="https://apod.nasa.gov/apod/archivepix.html"><Button outline color="primary" size="lg">Past Photos</Button></a>
            <br></br>
            <br></br>
            <NasaDateP><p className="date">Date: {props.date}</p></NasaDateP>
        </div>
    );
};

export default NasaDate;