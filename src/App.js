import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./header";
import Body from "./body";

function App() {
  let [data, setData] = useState({});
  let [counter, setCounter] = useState(0);
  let [year, setYear] = useState(0);
  let [month, setMonth] = useState(0);
  let [day, setDay] = useState(0);

  // Set the default data that will load with page
  useEffect(() => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=9tGhuvgAgFXb1lZYVgJnaXwZzNw9aEtheCNmfAzQ"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);

        //here we will set our time variables
        const tempDate = data.date;
        setYear(year + Number(tempDate.substring(0, 4)));
        setMonth(month + Number(tempDate.substring(5, 7)));
        setDay(day + Number(tempDate.substring(8, 10)));
      });
  }, []);

  const goBack = async () => {
    if (day > 1) {
      setDay(day - 1);
    } else if (month > 1 && month !== 3) {
      setMonth(month - 1);
      setDay(30);
    } else if (month > 1 && month === 3) {
      setMonth(month - 1);
      setDay(28);
    } else {
      setYear(year - 1);
      setMonth(12);
      setDay(30);
    }

    setCounter(counter + 1);
    console.log(`Decrease ${day}`);

    await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=9tGhuvgAgFXb1lZYVgJnaXwZzNw9aEtheCNmfAzQ&date=${year}-${month}-${day}`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };

  const goForeward = async () => {
    if (counter === 0) {
      return;
    } else if (day < 30 && month !== 2) {
      setDay(day + 1);
    } else if (day < 28 && month === 2) {
      setDay(day + 1);
    } else if (month < 12) {
      setMonth(month + 1);
      setDay(30);
    } else {
      setYear(year + 1);
      setMonth(12);
      setDay(30);
    }

    setCounter(counter - 1);
    console.log(`Increase ${day}`);

    await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=9tGhuvgAgFXb1lZYVgJnaXwZzNw9aEtheCNmfAzQ&date=${year}-${month}-${day}`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };

  return (
    <div className="App">
      <Header />
      <Body passedInfo={data} />
      <div className="body__buttonWrapper">
        <button className="previous" onClick={goBack}>
          Previous
        </button>
        {counter > 0 && (
          <button className="next" onClick={goForeward}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
