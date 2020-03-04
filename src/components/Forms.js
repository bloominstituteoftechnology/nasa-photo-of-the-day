import React from "react";
import "../App.css";

export default function Forms({
  onSubmityr,
  handleyrchange,
  onSubmitmth,
  handledaychange,
  handlemonthchange,
  onSubmitdy
}) {
  return (
    <div className='Forminput'>
      <form onSubmit={onSubmityr}>
        <input
          style={{ textAlign: "center" }}
          placeholder={` Year`}
          type='text'
          name='year'
          onChange={handleyrchange}
        />
      </form>
      <form onSubmit={onSubmitmth}>
        <input
          style={{ textAlign: "center" }}
          placeholder={` Month`}
          type='text'
          name='month'
          onChange={handlemonthchange}
        />
      </form>
      <form onSubmit={onSubmitdy}>
        <input
          style={{ textAlign: "center" }}
          placeholder={` Day`}
          type='text'
          name='day'
          onChange={handledaychange}
        />
      </form>
    </div>
  );
}
