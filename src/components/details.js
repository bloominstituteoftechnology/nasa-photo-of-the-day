import React from 'react';
import Imagedetails from './imagedetails';
import Footer from './footer';
import styled from 'styled-components';
//import axios from 'axios'

const StyledDetails = styled.div`
    padding: 2.5%;
    background-color: lightgrey;
`





const Details = (props) => {
const { data } = props;
return (
    < StyledDetails>
        <Imagedetails image={data.url} title={data.title} date={data.date}/>
        <Footer explanation={data.explanation}/>
    </ StyledDetails>
 )
}

export default Details;