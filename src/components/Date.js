import React, { useState } from 'react';


const Date1 = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker 
      dateFormat='yyyy/MM/dd'
      selected={startDate}
      onChange={date => setStartDate(date)}
    />
    );
};
