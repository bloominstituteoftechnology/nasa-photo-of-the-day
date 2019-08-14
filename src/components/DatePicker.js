import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import "date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

const DatePickerComp = props => {
  function handleDateChange(date) {
    //   setSelectedDate(date);
    props.setSelectedDate(date.toISOString().split("T")[0]);
  }

  return (
    <div className="datePicker">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          autoOk
          orientation="landscape"
          variant="static"
          openTo="date"
          value={props.selectedDate}
          onChange={handleDateChange}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default DatePickerComp;
