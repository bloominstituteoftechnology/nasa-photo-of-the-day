import React, { useState } from "react";
import styled from "styled-components";

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
  background-color: #2873ff;
  text-align: center;
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
  function selectedDate(e) {
    setDate(e.target.value);
  }

  console.log(date);

  return (
    <SelectStyleDiv>
      <h3 style={{ fontSize: "40px" }}>Select Photos of The Week Below</h3>
      <SelectStyle onClick={selectedDate}>
        {listDate.map((dates, idx) => {
          return <option key={idx}>{dates}</option>;
        })}
      </SelectStyle>
    </SelectStyleDiv>
  );
}

export default DateList;
