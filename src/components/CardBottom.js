import React from "react";
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import styled from 'styled-components'


const CustomBox = styled('div')`
height: 500px;
background-color: slategray;
text-align: center;
border-radius: 2%;
color: white;
font-size: 1rem;
`





const CardBottom = ({explanation, title}) =>{
    return (
       <CustomBox>

            <CardBody>

                <CardTitle>{title}</CardTitle>
                <CardText>{explanation}</CardText>

            </CardBody>
            </CustomBox>
    );
};

export default CardBottom;