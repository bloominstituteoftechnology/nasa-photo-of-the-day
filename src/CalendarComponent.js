import React, {useState} from "react";
import ReactCalendar from "react-calendar";

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = () => {
    setDate(date);
  }
  return <div>
        My Calendar!
    <div>
    <Calendar onChange={onChange} value={date} />
</div>
    </div>
};

