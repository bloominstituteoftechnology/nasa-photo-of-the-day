import React, {useState} from 'react';
import styled, { keyframes } from "styled-components";

const WhoWhen = (prop) => {
    const [inputValue, setInputValue] = useState('');
    const changeInput = e => {
        const {value} = e.target;
        setInputValue(value);
    }



    const {photoData} = prop;
    return(
    <div id='WhoWhen'>
        <h2> {photoData.title}</h2>
        <h3> By {photoData.copyright} on {photoData.date}</h3>
        <StyledYearInput id='year' />
        <StyledMonthInput id='month' />
        <StyledDayInput id='day' />
        <StyledFetchButton>Yield Ye' Data!</StyledFetchButton>
    </div>
    )
}

const StyledYearInput = styled.input`
    width: 75px;
    height: 20px;
    margin: 3px;
`;
const StyledMonthInput = styled.input`
    width: 75px;
    height: 20px;
    margin: 3px;
`;
const StyledDayInput = styled.input`
    width: 75px;
    height: 20px;
    margin: 3px;
`;

const StyledFetchButton = styled.button`
    width: 100px;
    height 50px;
    border-style: solid;
    border-width: 2px;
    border-color: grey;
    font-size: 15px;
    color: black;

`;

export default WhoWhen;
