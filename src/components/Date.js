import React from "react";
import styled from "styled-components";

const DateLayout = styled.div`
  text-align: right;
`;

export default function Date({ photo, setDate }) {
  const handleSubmit = event => {
    event.preventDefault();
  }
  const handleChange = event => {
    setDate(event.target.value);
  }

  return (
      <DateLayout className="date-layout">
        <form onSubmit={handleSubmit}>
          <select id='date_selector' value={photo.date} onChange={handleChange}>
            <option value='2019-11-19'>2019-11-19</option>
            <option value='2019-05-27'>2019-05-27</option>
            <option value='2019-05-24'>2019-05-24</option>
            <option value='2019-03-20'>2019-03-20</option>
          </select>
          {/* <input type='submit' value='Submit' /> */}
        </form>
      </DateLayout>
  );
}