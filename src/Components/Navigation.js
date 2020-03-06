import React, { useState } from "react";
import styled from 'styled-components';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../index.css";

const DateForm = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
    );
  };

 
const ColorH2 = styled.h2`
    color: rgb(32,50,143);
    font-family: sans-serif;
    font-size: 4rem;
`    


const WrapperDiv = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    border-bottom: dashed;
    background-color: rgb(58, 135, 199);
    cursor: pointer;
    &:hover {
    transform: translateY(-5px) scale(1.03);
    transition: all 0.3s;
    }
`


const Navigation = () => {
    return (
        <WrapperDiv>
            <ColorH2>NASA Photo of the Day</ColorH2>
        </WrapperDiv>
    );
};


export default Navigation;
