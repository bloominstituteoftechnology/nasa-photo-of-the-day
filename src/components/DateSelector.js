
import React, {useState} from "react";
import {InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';
import styled from 'styled-components';

const Dat = styled.div`
  padding: 0 5px;
`;

const DateSelector = (props) =>{
    const [startDate, setStartDate] = useState(new Date())

    const updateCall = value => {
        setStartDate(value)
        props.fnc(value)
    }

    return (
        <div>
            <InputGroup>
                <InputGroupAddon>
                    <Dat>
                    <InputGroupText >Date: </InputGroupText>
                    </Dat>  
                </InputGroupAddon>
                <DatePicker selected={startDate} dateFormat="yyyy-MM-dd" onChange={ date => updateCall(date) }/>
            </InputGroup>
        </div>
    )
}

export default DateSelector;