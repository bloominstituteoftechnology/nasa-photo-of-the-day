import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Calendar from "react-calendar";

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios(
          "https://api.nasa.gov/planetary/apod?api_key=hzHflOeu6UTScrR2CwszjDRycSuIiLgAsyeTHGbb"
        );
        console.log(data);
        setData(data.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://api.nasa.gov/planetary/apod?api_key=hzHflOeu6UTScrR2CwszjDRycSuIiLgAsyeTHGbb&date=2020-11-16"
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       setData(res.data);
  //       setLoading(false);
  //     });
  // }, []);

  const formatDate = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [year, month, day].join("-");
  };

  const onChange = async (event) => {
    try {
      const date = formatDate(event);
      console.log(date);
      const data = await axios(
        `https://api.nasa.gov/planetary/apod?api_key=hzHflOeu6UTScrR2CwszjDRycSuIiLgAsyeTHGbb&date=${date}`
      );
      setError(false);
      console.log(data);
      setData(data.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log(error);
    }
    console.log(event);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        No picture for today! :(
        <div>
          <section className="calendar-container">
            <div>
              <Calendar onChange={(event) => onChange(event)} value={value} />
            </div>
          </section>
        </div>
      </div>
    );
  }

  console.log(value);
  return (
    <div className="App">
      <div className="page-container">
        <section className="main-container">
          <div className="title-container">
            <div className="title-box">
              <h1 className="title">Astronomy Photo Of The Day</h1>
            </div>
          </div>
          <div className="image-container">
            {/* // insert dynamic image into image tag */}
            <div className="image-box">
              <img src={data.hdurl} className="apod-image" />
            </div>
            <div className="text-container">
              <div className="apod-description">
                {/* // insert dynamic title from data object */}
                <p className="apod-description-title">{data.title}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="calendar-container">
          <div>
            <Calendar onChange={(event) => onChange(event)} value={value} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
