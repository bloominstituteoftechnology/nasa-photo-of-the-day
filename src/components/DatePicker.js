import React from "react";
import MomentUtils from "@date-io/moment";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

const DatePickerComp = props => {
  function handleDateChange(date) {
    console.log(date);
    props.setSelectedDate(date.toISOString().split("T")[0]);
  }

  return (
    <div className="datePicker">
      <MuiPickersUtilsProvider utils={MomentUtils}>
        {/* <DatePicker
          autoOk
          orientation="landscape"
          openTo="date"
          value={props.selectedDate}
          onChange={handleDateChange}
        /> */}
        <DatePicker
          autoOk
          label="Pick a Date"
          value={props.selectedDate}
          onChange={handleDateChange}
          animateYearScrolling
        />
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default DatePickerComp;
