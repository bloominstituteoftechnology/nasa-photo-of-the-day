import React,{useState} from "react";
import DatePicker from "react-datepicker";

function DateBtn(props){
    return(
        <label>PICK A DATE
            <input onInput={()=>{
                props.todayDate()
                console.log("DATE CHANGED")
                // return props.setDatePicker("2019-09-08");
            }} type="date" id="datee">
            </input>
        </label>
    )
}

export default DateBtn;