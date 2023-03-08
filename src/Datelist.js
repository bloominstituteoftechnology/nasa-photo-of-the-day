import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";

const SelectStyleDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  positon: relative;
  min-width: 500px;
  height: 50px;
`;

const SelectStyle = styled.select`
  border: none;
  appearance: none;
  padding: 0 30px 0 15px;
  width: 45%;
  color: white;
  background-color: rgb(135, 187, 162);
  text-align: center;
  font-size: 25px;
`;

function DateList() {
  const listDate = [];
  const startDateRef = new Date();
  startDateRef.setDate(startDateRef.getDate() - 7);

  const startDate = startDateRef.toISOString().slice(0, 10);
  const endDateRef = new Date();
  const endDate = endDateRef.toISOString().slice(0, 10);

  const dateMove = new Date(startDate);
  let strDate = startDate;

  while (strDate < endDate) {
    strDate = dateMove.toISOString().slice(0, 10);
    listDate.push(strDate);
    dateMove.setDate(dateMove.getDate() + 1);
  }

  const [date, setDate] = useState(endDate);
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?date=${date}&API_KEY=DEMO_KEY`)
      .then((res) => {
        console(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [date]);

  function selectedDate(e) {
    setDate(e.target.value);
  }
  console.log(date);
  return (
    <SelectStyleDiv>
      <h3 style={{ fontSize: "40px" }}>Select Photos of The Week Below</h3>
      <SelectStyle onClick={selectedDate}>
        <option>Select Date ▼ </option>
        {listDate.map((dates, idx) => {
          return (
            <option value={dates} key={idx}>
              {dates}
            </option>
          );
        })}
      </SelectStyle>
    </SelectStyleDiv>
  );
}

export default DateList;
