import React from "react";

export default function Date(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor="date">Date: </label>
      <input type="date" id="date" name="date" />
      <input type="submit" />
    </form>
  );
}
