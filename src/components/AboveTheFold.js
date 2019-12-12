import React from "react";

export default function AboveTheFold({ date, url, title, explanation, changeDate }) {
  // * * * * * DISPLAYS LOADING MESSAGE WHILE DATA IS FETCHING

  if (!url) return <h2>Loading...</h2>;

  let input = '';

  const handleChange = (event) => {
    input = event.target.value;
  }

  return (
    <>
      <p>{date}</p>
      <img src={url} alt="Astronomy of the Day" /><br />
      <b>{title}</b><br />
      <p>{explanation}</p>
      <form>
        <input type="text" name="date" placeholder="Date YYYY-MM-DD" onChange={handleChange} />
        <input type="submit" value="Change Date" onClick={event => changeDate(event, input)} />
      </form>
    </>
  );
}