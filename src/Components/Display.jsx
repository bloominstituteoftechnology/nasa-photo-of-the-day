import React, { useState, useEffect } from "react";
import Details from "./Details";
import DatePicker from "./DatePicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import "./Display.css";

const Display = props => {
  let today = new Date();
  const simpleDate = today.toISOString().substring(0, 10);
  const [startDate] = useState(simpleDate);
  const [date, setDate] = useState(simpleDate);
  const [nasa, setNasa] = useState([]);
  const [image, setImage] = useState("");

  useEffect(() => {
    axios(
      `https://api.nasa.gov/planetary/apod?api_key=2WMibPBLcne3gkungmmKltcZNFPsM4vlP2xlddJg`
    )
      .then(response => {
        // console.log(response);
        setNasa(response.data);
      })
      .catch(error => console.error("Could not obtain Image data ", error));
  }, []);

  console.log(date);

  return (
    <div className="display-container">
      <div className="nasa-image-container">
        <img src={nasa.url} alt={nasa.title} />
      </div>
      <DatePicker
        showPopperArrow={false}
        dateFormat="yyyy/MM/dd"
        selected={startDate}
        onChange={date => {
          setDate(date);
        }}
      />
      <Details title={nasa.title} explanation={nasa.explanation} />
    </div>
  );
};

export default Display;

// const calanderDate = () => {
//   const year = startDate.getFullYear();
//   const month = startDate.getMonth();
//   const day = startDate.getDate();

//   return `${year}-${month}-${day}`;
// };

// console.log(calanderDate());

// startDate.getFullYear() + "-" + (startDate.getMonth() + 1) + "-" + startDate.getDate();
// console.log(calanderDate);
