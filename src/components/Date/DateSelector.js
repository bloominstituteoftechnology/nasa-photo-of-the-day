import React, { useState, Component } from "react";
import DatePicker from "react-date-picker";
import GetImage from "../GetImage/GetImage";


function DateSelector() {
    const [date, setDate] = useState();
    let getDay = () => {
        return date;
    }
    console.log(date);
    return (
    <div>
        <br/>
        <p>Please Select a Day!</p>
    <DatePicker onChange={setDate} value={date}/>
        <br/>
    <GetImage day={getDay}/>
    </div>
)}

export default DateSelector;