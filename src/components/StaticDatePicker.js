import React, { Fragment, useState } from "react";
import { DatePicker, KeyboardDatePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import PhotoCardInfo from "./PhotoCardInfo";
import {CalendarPhotoTitle, PhotoAndCalendar} from "./CardStyles.js";
import { Segment } from "semantic-ui-react";
import * as moment from "moment";

const StaticDatePicker = () => {
  const [date, changeDate] = useState(moment(new Date()).format('YYYY-MM-DD'));

  const handleChange = date => {    
    
    changeDate(moment(date).format('YYYY-MM-DD'));

    console.log("date", date);           
    
  };//end handleChange


  // prettier-ignore
  return (
    <>
    <PhotoAndCalendar >

     {/*<MuiPickersUtilsProvider utils={MomentUtils}>

        <DatePicker
          autoOk
          orientation="portrait"
          variant="static"
          openTo="date"
          value={date}
          onChange={handleChange}
        />

  </MuiPickersUtilsProvider>*/}

    <MuiPickersUtilsProvider utils={MomentUtils}>

      <KeyboardDatePicker
        autoOk
        variant="inline"
        inputVariant="outlined"
        label="Select A Date"        
        value={date}
        InputAdornmentProps={{ position: "start" }}
        onChange={handleChange}
      />

  </MuiPickersUtilsProvider>

    

    </PhotoAndCalendar>

      <PhotoCardInfo searchDate = {date} />
    </>
   
  );
};

export default StaticDatePicker;