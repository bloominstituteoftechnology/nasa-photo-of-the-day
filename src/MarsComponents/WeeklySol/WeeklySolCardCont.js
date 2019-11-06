import React, { useState, useEffect } from "react";
import axios from "axios";
import WeeklySolCard from "./WeeklySolCard";

export default function WeeklySolCardCont() {
  const [weeklyWeather, setWeeklyWeather] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https: //api.nasa.gov/insight_weather/?api_key=OzNGKiMuJkWpDBCAnJBHes0Wa16NJ5YD4SlcO0DP"
      )
      .then(response => {
        setWeeklyWeather(response.data);
        console.log(response);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);
}

return (
  <div>
    <WeeklySolCard />
  </div>
);
