import React from "react";
import ReactDOM from "react-dom";

import DayPicker from "react-day-picker";
import DayPickerInput from "react-day-picker/DayPickerInput";

import "react-day-picker/lib/style.css";

function Example() {
  return (
    <div>
      <h3>DayPicker</h3>
      <DayPicker selectedDays={new Date()} />

      <h3>DayPickerInput</h3>
      <DayPickerInput placeholder="DD/MM/YYYY" format="DD/MM/YYYY" />
    </div>
  );
}