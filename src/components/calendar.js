import React, { useState, useEffect } from "react";

export const Calendar = ({ fetchDataWithDate }) => {
  const [days, setDays] = useState([]);
  const [monthName, setMonthName] = useState("");
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState("");
  const [date, setDate] = useState(new Date())
  const [ highlightDay, setHighlightDay ] = useState()

  const setupCalendar = (changeMonth = 0) => {
    const date = new Date();
    let currentMonth = date.getMonth();
    date.setMonth(currentMonth + 1 + changeMonth);
    date.setDate(0);
    let lastDayOfMonth = date.getDate();
    let calendar = [];
    let week = [];
    for (var i = 1; i <= lastDayOfMonth; i++) {
      date.setDate(i);
      if (i === 1) {
        for (var j = 1; j < date.getDay() + 1; j++) {
          week.push("");
        }
      }
      week.push(i.toString());
      if (date.getDay() === 6) {
        calendar.push(week);
        week = [];
      }
    }
    for (var i = date.getDay(); i < 6; i++) {
      week.push("");
    }
    calendar.push(week);
    setHighlightDay()
    setDate(date)
    setMonth(changeMonth);
    setYear(date.getFullYear().toString())
    setMonthName(date.toDateString().slice(3, 7));
    setDays(calendar);
  };
  const selectDate = (day) => {
      const prevDate = date;
      prevDate.setDate(day)
      setDate(prevDate)
      setHighlightDay(day)
      console.log(prevDate.toISOString().slice(0,10))
      fetchDataWithDate(prevDate.toISOString().slice(0,10))
  }

  useEffect(setupCalendar, []);

  return (
    <div className="calendar">
      <div className="month">
        <h2>{monthName}</h2>
        <h2>{year}</h2>
        {days.map((week, i) => {
          return (
            <div className="week" key={i}>
              {week.map((day, i) => {
                return (
                    <div 
                        style={highlightDay === day ? {background: "yellow"} : {background: "white"}} 
                        onClick={() => selectDate(day)} 
                        className="day" 
                        key={i}
                    >
                        {day}
                    </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="calendar-buttons-div">
        <button onClick={() => setupCalendar(month - 1)}>Previous Month</button>
        <button onClick={() => setupCalendar(month + 1)}>Next Month</button>
      </div>
    </div>
  );
};

export default Calendar;
