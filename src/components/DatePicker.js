import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Date1 = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate)
  console.log(props)
  return (
    <DatePicker
    //   value={props.date}
      dateFormat='yyyy-MM-dd'
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
  );
};

export default Date1;
