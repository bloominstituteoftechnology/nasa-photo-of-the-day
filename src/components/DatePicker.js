import React, { useState } from 'react';
import moment from 'moment'
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import el from 'date-fns/locale/el';
// registerLocale('el', el);

const Date1 = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      locale='el'
      //   value={props.date}
      dateFormat='yyyy-MM-dd'
      selected={startDate}
      onChange={(date) => {
          let formattedDate = (moment(date).format()).split('').splice(0, [10],...[date.length - 1]).join('')
          setStartDate(date);
        // formattedDate = formattedDate.split('').splice(0, [10],...[date.length - 1]).join('')
        props.helperFn(formattedDate);
      }}
    />
  );
};

export default Date1;
