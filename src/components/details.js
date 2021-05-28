import React from 'react';
import imagedetails from './imagedetails';
import footer from './footer';
import styled from 'styled-components';

const StyledDetails = styled.div`
    padding: 2.5%;
    background-color: lightgrey;
`





const details = (props) => {
const { data } = props;
return (
    < StyledDetails>
        <imagedatails image={data.url} title={data.title} date={data.date} />
        <footer explanation={data.explanation}/>
    </ StyledDetails>
 )
}

export default details;