import React,{useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

 

function DateInput({updateChosenDate}){
    const [myDate, setMyDate] = useState("");
    return(
    <div style={{ margin:"auto",textAlign:"left"}}>
    Choose Your Date :
    <DatePicker
     placeholderText="Click to choose your Date !"
     selected={myDate}
     dateFormat="yyyy-MM-dd" 
     onChange={date => {
        let reformattedDate = moment(date).format('YYYY-MM-DD');
        console.log('rd=',reformattedDate)
        updateChosenDate(reformattedDate);}
    }
    />

    </div>    
    )
 }

export default DateInput;