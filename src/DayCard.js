import React from 'react';
import styled from 'styled-components';

const StyledTop = styled.div`
width: 100%;
height: 40vh;
display: flex;
justify-content: space-around;
`

const StyledLeft = styled.div`
background-color: ${props => props.theme.primaryColor};
border-radius: 5%;
width: 50%;
color: ${props => props.theme.white};
text-align: center;
font-style: 'lato';
font-size: 0.75rem;
padding: 2%;
margin:1%;
`
const StyledRight = styled.div`
    width: 50%;
    border-radius: 5%;
    

img {
 max-width: 100%;
 border-radius: 3%;
 border: 2px solid ${props => props.theme.primaryColor};
 margin-bottom: 1%;
}
`


export default function DayCard(props){
const {data} = props;



return (
    <StyledTop>
        <StyledLeft>
            <h1>{data.date} - {data.title} </h1>
            <p>{data.explanation}</p>
        </StyledLeft>
        <StyledRight>
            <img src={data.url} alt='This is a random NASA phenomenon'/>
        </StyledRight>
    </StyledTop>     
);
}









