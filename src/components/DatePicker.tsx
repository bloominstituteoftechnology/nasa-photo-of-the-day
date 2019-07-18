import React from 'react';
// import './DatePicker.scss';
import Input from '@material-ui/core/Input';

interface DatePickerProps {
  selectedDate: string;
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
}
function DatePicker({ selectedDate, setSelectedDate }: DatePickerProps) {
  return (
    <Input type="date" value={selectedDate}
      onInput={(e) => {
        const input = e.currentTarget.querySelector('input');
        if (!input) return;
        setSelectedDate(input.value);
      }}></Input>
  );
}

export default DatePicker;
