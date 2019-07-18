import React from 'react';
import './DatePicker.scss';

interface DatePickerProps {
  selectedDate: string;
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
}
function DatePicker({ selectedDate, setSelectedDate }: DatePickerProps) {
  return (
    <input type="date" defaultValue={selectedDate}
      onInput={(e) => {
        setSelectedDate(e.currentTarget.value);
        console.log(e.currentTarget.value);
      }}></input>
  );
}

export default DatePicker;
