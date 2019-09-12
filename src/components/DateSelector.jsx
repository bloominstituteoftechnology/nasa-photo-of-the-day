import React from "react";
import {data} from "../DateData";

const DateSelector = props =>{
    return (
        <div>
            <h1>Pick a Date: </h1>
            <select onChange={props.fnc}>
                {
                    data.map((date, index) =>{
                        return (<option key={index} value={date}>{date}</option>);
                    })
                }
            </select>
        </div>
    );

};

export default DateSelector;