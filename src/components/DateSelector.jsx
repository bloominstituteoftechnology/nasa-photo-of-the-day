import React, {useState} from "react";
import {InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';



const DateSelector = props =>{
    
    const [startDate, setStartDate] = useState(new Date());
    
    return (
        <div>
        <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Choose a date: </InputGroupText>
                </InputGroupAddon>
                <DatePicker className="date-picker" selected={startDate} dateFormat="yyyy-MM-dd" onChange={date => setStartDate(date)}/>
            
        </InputGroup>
        </div>
    );

};

export default DateSelector;