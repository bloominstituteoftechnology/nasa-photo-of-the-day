import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Apodinfo from "./components/Apodinfo";
import Apod from "./components/Apod";

function App() {
  const [apod, setApod] = useState([]);
  const [info, setInfo] = useState(``);
  const [date, setDate] = useState(``);
  const [title, setTitle] = useState(``);
  const [count, setCount] = useState(2019);
  const [countday, setCountday] = useState(12);
  const [countmonth, setCountmonth] = useState(12);

  const [year, setYear] = useState(count);
  const [month, setMonth] = useState(countmonth);
  const [day, setDay] = useState(countday);
  const nasaKey = `DJqcc2QfRAfP8FktB7mpqLcdtPig9ij7BUd2CRr6`;

  
  const yes = e => {
    setYear(count + 1);     
      };

      useEffect(() => {
        axios.get(
            `https://api.nasa.gov/planetary/apod?api_key=${nasaKey}&date=${year}-${month}-${day}`
          )
          .then(response => {
            const nasaKey = `DJqcc2QfRAfP8FktB7mpqLcdtPig9ij7BUd2CRr6`;

            const apodImg = response.data.hdurl;
            const apodInfo = response.data.explanation;
            const apodDate = response.data.date;
            let apodTitle = response.data.title;

            // console.log(response.data);
            setApod(apodImg);
            setInfo(apodInfo);
            setDate(apodDate);
            setTitle(apodTitle);
          })
          .catch(err => {
            console.log(err.message, `sorry`);
          });
        }, [count, year, month, day]);

        const handleyrchange = e => {
          setCount(e.target.value);
          setCountmonth(e.target.value);
          setCountday(e.target.value);
          setYear(count - 1);
        };
      
        const onSubmityr = event => {
          event.prventDefault();
          setCount(count);
        };
        const onSubmitdy = event => {
          event.prventDefault();
          setCountday(countmonth);
        };
        const onSubmitmth = event => {
          event.prventDefault();
          setCountmonth(countmonth);
        };

        console.log(`hello`, count, year, month);

        return (
          <div className='App'>
            <div
              style={{
                display: `flex`,
                justifyContent: `space-evenly`,
                padding: `1%`
              }}>
              <form onSubmit={onSubmityr}>
                <input type='text' name='year' onChange={handleyrchange} />
              </form>
              <button onClick={e => setYear(count)}>change year</button>
        <form onSubmit={onSubmitmth}>
          <input type='text' name='month' onChange={handleyrchange} />
        </form>
        <button onClick={e => setMonth(countmonth)}>change month</button>
        <form onSubmit={onSubmitdy}>
          <input type='text' name='day' onChange={handleyrchange} />
        </form>
        <button onClick={e => setDay(countday)}> change day</button>
      </div>

      <Apodinfo apod={apod} />
      <Apodinfo   info={info} date={date} title={title} />

      <p></p>
    </div>
  );


}

export default App;
